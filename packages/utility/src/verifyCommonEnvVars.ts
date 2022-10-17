/**
 * Strict mode can be disabled in development mode to ensure that
 * effects don't fire twice. See https://github.com/facebook/react/issues/24553
 *
 * Effects only fire once in production mode and strict mode should be enabled
 * in production.
 */
const verifyCommonEnvVars = () => {
  const strictModeIsDisabled =
    process.env.NEXT_PUBLIC_STRICT_MODE === 'false' ||
    !process.env.NEXT_PUBLIC_STRICT_MODE

  if (process.env.NODE_ENV === 'production' && strictModeIsDisabled)
    throw new Error(
      'Strict mode is disabled in production; please enable strict mode for this environment',
    )

  process.stdout.write(
    `Strict mode is ${strictModeIsDisabled ? 'disabled' : 'enabled'}\n`,
  )

  return {
    NEXT_PUBLIC_STRICT_MODE: JSON.parse(
      process.env.NEXT_PUBLIC_STRICT_MODE || 'true',
    ),
  }
}

export const commonEnvVars = verifyCommonEnvVars()
