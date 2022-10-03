import Link from 'next/link'
import Box from '@mui/material/Box'
import { ReactElement } from 'react'
import Button from '@mui/material/Button'
import { useForm } from './hooks/useForm'
import H1 from '../../components/library/H1'
import H3 from '../../components/library/H3'
import IconButton from '@mui/material/IconButton'
import Body1 from '../../components/library/Body1'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '../../components/library/TextField'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import UnauthenticatedLayout from '../../components/layouts/Unauthenticated'
import { sharedAnimatedContainerStyles } from '../../styles/shared/animatedContainerStyles'

const SignUp = () => {
  const {
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
  } = useForm()

  return (
    <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
      <form onSubmit={handleSubmit}>
        <H1 sx={{ mb: 4, letterSpacing: '2px' }}>SIGN UP</H1>

        <FormControl fullWidth>
          <H3>Username</H3>
          <Body1>
            Your username will be publicly displayed with your landlord reviews.
          </Body1>

          <TextField
            size="small"
            label="Username"
            color="secondary"
            id="signup-username"
            name="username"
            onChange={({ target: { value } }) => setUsername(value)}
            onBlur={() => setUsernameBlurred(true)}
            value={username}
            error={(usernameBlurred || didAttemptSubmit) && !!errors.username}
            helperText={
              (usernameBlurred || didAttemptSubmit) && errors.username
            }
          />
        </FormControl>

        <H3>Email</H3>
        <Body1>
          Your email is used to verify your account, and notify you of responses
          to your ratings.
        </Body1>
        <FormControl fullWidth>
          <TextField
            size="small"
            label="Email"
            color="secondary"
            id="signup-email"
            name="email"
            onChange={({ target: { value } }) => setEmail(value)}
            onBlur={() => setEmailBlurred(true)}
            value={email}
            error={(emailBlurred || didAttemptSubmit) && !!errors.email}
            helperText={(emailBlurred || didAttemptSubmit) && errors.email}
          />
        </FormControl>

        <H3>Password</H3>
        <Body1>Your password must be at least 8 characters long.</Body1>
        <FormControl fullWidth>
          <TextField
            size="small"
            label="Password"
            color="secondary"
            id="signup-password"
            name="password"
            onChange={({ target: { value } }) => setPassword(value)}
            onBlur={() => setPasswordBlurred(true)}
            value={password}
            type={passwordVisible ? 'text' : 'password'}
            error={(passwordBlurred || didAttemptSubmit) && !!errors.password}
            helperText={
              (passwordBlurred || didAttemptSubmit) && errors.password
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    edge="end"
                  >
                    {passwordVisible ? (
                      <VisibilityOff color="secondary" />
                    ) : (
                      <Visibility color="secondary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <Button
          disabled={didAttemptSubmit && errorsExist}
          fullWidth
          type="submit"
          variant="contained"
          color="secondary"
        >
          Sign Up
        </Button>

        {didAttemptSubmit && errorsExist && (
          <Body1 sx={{ mt: 2, color: 'error.main' }}>
            Errors exist in the form above. Please fix them before submitting.
          </Body1>
        )}

        {errors.form && (
          <Body1 sx={{ mt: 1, color: 'primary.main' }}>{errors.form}</Body1>
        )}

        <Body1 sx={{ mt: 4 }}>
          Already have an account?{' '}
          <Link href="/signin" passHref>
            <Button
              component="a"
              disabled={submitting}
              variant="text"
              color="secondary"
            >
              Sign In
            </Button>
          </Link>
        </Body1>
      </form>
    </Box>
  )
}

SignUp.getLayout = (page: ReactElement) => (
  <UnauthenticatedLayout user={page.props.user}>{page}</UnauthenticatedLayout>
)

export default SignUp
