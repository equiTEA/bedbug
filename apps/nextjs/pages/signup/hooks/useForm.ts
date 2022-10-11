import { useRouter } from 'next/router'
import isEmail from 'validator/lib/isEmail'
import { graphql, createUser, GraphQLError } from '@bedbug/networking'
import { useCallback, useState, useMemo, FormEvent, useEffect } from 'react'

type Errors = {
  username?: string
  email?: string
  password?: string
  form?: string
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
  const [formError, setFormError] = useState<string | undefined>(undefined)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const usernameError = useMemo(() => {
    if (username === '') return 'Username is required'
  }, [username])

  const emailError = useMemo(() => {
    if (email === '') return 'Email is required'
    if (!isEmail(email)) return 'Email is invalid'
  }, [email])

  const passwordError = useMemo(() => {
    if (password === '') return 'Password is required'
    if (password.length < 8) return 'Password must be at least 8 characters'
  }, [password])

  useEffect(() => {
    setFormError(undefined)
  }, [email, password, username])

  const errors: Errors = useMemo(
    () => ({
      username: usernameError,
      email: emailError,
      password: passwordError,
      form: formError,
    }),
    [usernameError, emailError, passwordError, formError],
  )

  const errorsExist = useMemo(
    () => Object.values(errors).some(Boolean),
    [errors],
  )

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      setDidAttemptSubmit(true)

      // Return early if there are errors
      if (Object.values(errors).some(Boolean)) return

      setSubmitting(true)

      const response = await graphql({
        operationName: 'createUser',
        query: createUser,
        variables: {
          data: {
            email,
            password,
            username,
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          // Unique constraint violation: https://www.prisma.io/docs/reference/api-reference/error-reference
          const uniqueConstraintViolation = errors.find(
            ({ extensions }) => extensions.prisma.code === 'P2002',
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

      if (!response.errors) push('/')
    },
    [errors, username, email, password, push],
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
  }
}
