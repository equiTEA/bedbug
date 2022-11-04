import Link from 'next/link'
import Box from '@mui/material/Box'
import { ReactElement } from 'react'
import Logo from '../../components/Logo'
import Button from '@mui/material/Button'
import { useForm } from './hooks/useForm'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import InputAdornment from '@mui/material/InputAdornment'
import { H1, Body1, TextField, BackLink } from '@bedbug/ui'
import { smallViewportLogoContainerStyles } from './styles'
import CircularProgress from '@mui/material/CircularProgress'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import UnauthenticatedLayout from '../../components/layouts/Unauthenticated'
import { sharedAnimatedContainerStyles } from '../../styles/shared/animatedContainerStyles'
import { useTheme } from '@mui/material/styles'

const SignIn = () => {
  const theme = useTheme()

  const {
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
          <H1 sx={{ mb: 4, letterSpacing: '2px' }}>SIGN IN</H1>

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
                      sx={{ mr: -1 }}
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
            disabled={submitting || (didAttemptSubmit && errorsExist)}
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
          >
            {submitting ? (
              <CircularProgress color="secondary" size={24} />
            ) : (
              'Sign In'
            )}
          </Button>

          {didAttemptSubmit && errorsExist && (
            <Body1
              sx={{
                mt: 2,
                color: 'primary.main',
                fontWeight: 800,
              }}
            >
              Errors exist in the form above. Please fix them before submitting.
            </Body1>
          )}

          {errors.form && (
            <Body1
              sx={{
                mt: 1,
                color: 'primary.main',
                fontWeight: 800,
              }}
            >
              {errors.form}
            </Body1>
          )}

          <Body1 sx={{ mt: 4 }}>
            Don&apos;t have an account yet?{' '}
            <Link href="/signup" passHref>
              <Button disabled={submitting} variant="text" color="secondary">
                Sign Up
              </Button>
            </Link>
          </Body1>
        </form>
      </Box>
    </Box>
  )
}

SignIn.getLayout = (page: ReactElement) => (
  <UnauthenticatedLayout>{page}</UnauthenticatedLayout>
)

export default SignIn
