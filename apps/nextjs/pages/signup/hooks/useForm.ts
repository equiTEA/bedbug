import {
  graphql,
  createUser,
  GraphQLError,
  authenticateUserWithPassword,
} from '@bedbug/networking'
import { useRouter } from 'next/router'
import isEmail from 'validator/lib/isEmail'
import { useCallback, useState, useMemo, FormEvent, useEffect } from 'react'

type Errors = {
  username: string | null
  email: string | null
  password: string | null
  form: string | null
  hCaptcha: string | null
}

export const useForm = () => {
  const { push } = useRouter()

  const [username, setUsername] = useState('')
  const [usernameBlurred, setUsernameBlurred] = useState(false)

  const [email, setEmail] = useState('')
  const [emailBlurred, setEmailBlurred] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordBlurred, setPasswordBlurred] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const [hCaptchaVerified, setHCaptchaVerified] = useState(false)
  const [hCaptchaToken, setHCaptchaToken] = useState<string | null>(null)

  const usernameError = useMemo(() => {
    if (username === '') return 'Username is required'
    return null
  }, [username])

  const emailError = useMemo(() => {
    if (email === '') return 'Email is required'
    if (!isEmail(email)) return 'Email is invalid'
    return null
  }, [email])

  const passwordError = useMemo(() => {
    if (password === '') return 'Password is required'
    if (password.length < 8) return 'Password must be at least 8 characters'
    return null
  }, [password])

  const hCaptchaError = useMemo(() => {
    if (!hCaptchaVerified) return 'Please verify you are human'
    return null
  }, [hCaptchaVerified])

  useEffect(() => {
    setFormError(null)
  }, [email, password, username, hCaptchaVerified])

  const errors: Errors = useMemo(
    () => ({
      username: usernameError,
      email: emailError,
      password: passwordError,
      form: formError,
      hCaptcha: hCaptchaError,
    }),
    [usernameError, emailError, passwordError, formError, hCaptchaError],
  )

  const errorsExist = useMemo(
    () => Object.values(errors).some(Boolean),
    [errors],
  )

  const handleHCaptchaVerificationSuccess = useCallback((token: string) => {
    setHCaptchaVerified(true)
    setHCaptchaToken(token)
  }, [])

  const handleHCaptchaTokenExpiration = useCallback(() => {
    setHCaptchaVerified(false)
    setHCaptchaToken(null)
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      setDidAttemptSubmit(true)

      // Return early if there are errors
      if (Object.values(errors).some(Boolean)) return

      setSubmitting(true)

      const createUserResponse = await graphql({
        operationName: 'createUser',
        query: createUser,
        variables: {
          data: {
            email,
            password,
            username,
            hCaptchaToken,
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          // Unique constraint violation: https://www.prisma.io/docs/reference/api-reference/error-reference
          const uniqueConstraintViolation = errors.find(
            ({ extensions }) => extensions.prisma?.code === 'P2002',
          )

          if (uniqueConstraintViolation) {
            setSubmitting(false)
            setFormError(
              'A user with those credentials already exists. Try signing in below instead.',
            )
            return
          }

          if (errors.length > 0) setFormError('An unexpected error occurred')
          setSubmitting(false)
        },
      })

      const signInResponse = await graphql({
        operationName: 'authenticateUserWithPassword',
        query: authenticateUserWithPassword,
        variables: {
          email,
          password,
        },
        handleErrors: (errors: GraphQLError[]) => {
          console.error({ errors })
          if (errors.length > 0) setFormError('An unexpected error occurred')
        },
      })

      if (signInResponse.message === 'Authentication failed.') {
        setSubmitting(false)
        return setFormError('An unexpected error occurred. Please try again.')
      }

      if (!createUserResponse.errors && !signInResponse.errors) push('/')
    },
    [errors, username, email, password, push, hCaptchaToken],
  )

  return {
    handleSubmit,
    didAttemptSubmit,
    submitting,

    errors,
    errorsExist,

    username,
    setUsername,
    usernameBlurred,
    setUsernameBlurred,

    email,
    setEmail,
    emailBlurred,
    setEmailBlurred,

    password,
    setPassword,
    passwordBlurred,
    setPasswordBlurred,
    passwordVisible,
    setPasswordVisible,

    hCaptchaVerified,
    handleHCaptchaVerificationSuccess,
    handleHCaptchaTokenExpiration,
  }
}
