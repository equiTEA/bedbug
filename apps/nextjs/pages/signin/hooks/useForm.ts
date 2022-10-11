import {
  graphql,
  GraphQLError,
  authenticateUserWithPassword,
} from '@bedbug/networking'
import { useRouter } from 'next/router'
import isEmail from 'validator/lib/isEmail'
import { useCallback, useEffect, useState, useMemo, FormEvent } from 'react'

type Errors = {
  email?: string
  password?: string
  form?: string
}

export const useForm = () => {
  const { push } = useRouter()

  const [email, setEmail] = useState('')
  const [emailBlurred, setEmailBlurred] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordBlurred, setPasswordBlurred] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)
  const [formError, setFormError] = useState<string | undefined>(undefined)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const emailError = useMemo(() => {
    if (email === '') return 'Email is required'
    if (!isEmail(email)) return 'Email is invalid'
  }, [email])

  const passwordError = useMemo(() => {
    if (password === '') return 'Password is required'
  }, [password])

  const errors: Errors = useMemo(
    () => ({
      email: emailError,
      password: passwordError,
      form: formError,
    }),
    [emailError, passwordError, formError],
  )

  useEffect(() => {
    setFormError(undefined)
  }, [email, password])

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

      if (response.message === 'Authentication failed.') {
        setSubmitting(false)
        return setFormError(
          'We could not find a user with that email and password. Please try again.',
        )
      }

      if (!response.errors) push('/')
    },
    [errors, email, password, push],
  )

  return {
    handleSubmit,
    didAttemptSubmit,
    submitting,

    errors,
    errorsExist,

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
