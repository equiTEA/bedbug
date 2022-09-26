import Link from 'next/link'
import Box from '@mui/material/Box'
import { ReactElement } from 'react'
import Button from '@mui/material/Button'
import { useForm } from './hooks/useForm'
import H1 from '../../components/library/H1'
import IconButton from '@mui/material/IconButton'
import Body1 from '../../components/library/Body1'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '../../components/library/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import UnauthenticatedLayout from '../../components/layouts/Unauthenticated'
import { sharedAnimatedContainerStyles } from '../../styles/shared/animatedContainerStyles'

const SignIn = () => {
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
    <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
      <form onSubmit={handleSubmit}>
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
          Don't have an account yet?{' '}
          <Link href="/signup" passHref>
            <Button disabled={submitting} variant="text" color="secondary">
              Sign Up
            </Button>
          </Link>
        </Body1>
      </form>
    </Box>
  )
}

SignIn.getLayout = (page: ReactElement) => (
  <UnauthenticatedLayout user={page.props.user}>{page}</UnauthenticatedLayout>
)

export default SignIn
