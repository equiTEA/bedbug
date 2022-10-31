import Link from 'next/link'
import Box from '@mui/material/Box'
import { ReactElement } from 'react'
import Logo from '../../components/Logo'
import Button from '@mui/material/Button'
import { useForm } from './hooks/useForm'
import { useTheme } from '@mui/material/styles'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import InputAdornment from '@mui/material/InputAdornment'
import { smallViewportLogoContainerStyles } from './styles'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { H1, H3, Body1, BackLink, TextField } from '@bedbug/ui'
import UnauthenticatedLayout from '../../components/layouts/Unauthenticated'
import { sharedAnimatedContainerStyles } from '../../styles/shared/animatedContainerStyles'

const SignUp = () => {
  const theme = useTheme()
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

    hCaptchaVerified,
    handleHCaptchaVerificationSuccess,
  } = useForm()

  return (
    <Box sx={{ pt: 3 }}>
      <Box sx={{ pl: 2 }}>
        <BackLink linkText="Address Search" href="/" />
      </Box>
      <Box sx={smallViewportLogoContainerStyles}>
        <Logo fill={theme.palette.secondary.main} />
      </Box>
      <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
        <form
          style={{ maxWidth: '400px', margin: '0 auto' }}
          onSubmit={handleSubmit}
        >
          <H1 sx={{ mb: 1, letterSpacing: '2px' }}>SIGN UP</H1>
          <Body1 sx={{ mb: 3 }}>
            Sign up to submit a review, or use our map view to compare rental
            prices and reviews by location.
          </Body1>

          <FormControl fullWidth>
            <H3>Username</H3>
            <Body1>
              Your username will be publicly displayed with your landlord
              reviews.
            </Body1>

            <TextField
              size="small"
              name="username"
              value={username}
              color="secondary"
              label="Username"
              id="signup-username"
              onBlur={() => setUsernameBlurred(true)}
              onChange={({ target: { value } }) => setUsername(value)}
              error={(usernameBlurred || didAttemptSubmit) && !!errors.username}
              helperText={
                (usernameBlurred || didAttemptSubmit) && errors.username
              }
            />
          </FormControl>

          <H3>Email</H3>
          <Body1>
            Your email is used to verify your account, and notify you of
            responses to your ratings.
          </Body1>
          <FormControl fullWidth>
            <TextField
              size="small"
              name="email"
              label="Email"
              value={email}
              color="secondary"
              id="signup-email"
              onChange={({ target: { value } }) => setEmail(value)}
              onBlur={() => setEmailBlurred(true)}
              error={(emailBlurred || didAttemptSubmit) && !!errors.email}
              helperText={(emailBlurred || didAttemptSubmit) && errors.email}
            />
          </FormControl>

          <H3>Password</H3>
          <Body1>Your password must be at least 8 characters long.</Body1>
          <FormControl fullWidth>
            <TextField
              size="small"
              name="password"
              label="Password"
              value={password}
              color="secondary"
              id="signup-password"
              onBlur={() => setPasswordBlurred(true)}
              type={passwordVisible ? 'text' : 'password'}
              onChange={({ target: { value } }) => setPassword(value)}
              error={(passwordBlurred || didAttemptSubmit) && !!errors.password}
              helperText={
                (passwordBlurred || didAttemptSubmit) && errors.password
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordVisible(!passwordVisible)}
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

          <Box sx={{ my: 3 }}>
            <HCaptcha
              size="normal"
              onLoad={() => console.log('loaded')}
              onExpire={() => console.log('token expired')}
              onChalExpired={() => console.log('challenge expired')}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
              onVerify={(token, ekey) =>
                handleHCaptchaVerificationSuccess(token, ekey)
              }
            />
          </Box>

          <Button
            fullWidth
            type="submit"
            color="secondary"
            variant="contained"
            disabled={didAttemptSubmit && errorsExist}
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
                variant="text"
                color="secondary"
                disabled={submitting}
              >
                Sign In
              </Button>
            </Link>
          </Body1>
        </form>
      </Box>
    </Box>
  )
}

SignUp.getLayout = (page: ReactElement) => (
  <UnauthenticatedLayout>{page}</UnauthenticatedLayout>
)

export default SignUp
