import { expect, Page } from '@playwright/test'

export const signupPageSmokeTests = async (page: Page) => {
  const signUpPageHeading = page.getByRole('heading', { name: 'SIGN UP' })
  const signUpPageIntructions = page.getByText(
    'Sign up to submit a review, or use our map view to compare rental prices and reviews by location.',
  )

  const usernameHeading = page.getByRole('heading', { name: 'Username' })
  const usernameInstructions = page.getByText(
    'Your username will be publicly displayed with your landlord reviews.',
  )
  const usernameInput = page.getByLabel('Username')

  const emailHeading = page.getByRole('heading', { name: 'Email' })
  const emailInstructions = page.getByText(
    'Your email is used to verify your account, and notify you of responses to your ratings.',
  )
  const emailInput = page.getByLabel('Email')

  const passwordHeading = page.getByRole('heading', { name: 'Password' })
  const passwordInstructions = page.getByText(
    'Your password must be at least 8 characters long.',
  )
  const passwordInput = page.getByLabel('Password')
  const passwordVisibilityButton = page.getByRole('button', {
    name: 'toggle password visibility',
  })

  await expect(signUpPageHeading).toBeVisible()
  await expect(signUpPageIntructions).toBeVisible()
  await expect(usernameHeading).toBeVisible()
  await expect(usernameInstructions).toBeVisible()
  await expect(usernameInput).toBeVisible()
  await expect(emailHeading).toBeVisible()
  await expect(emailInstructions).toBeVisible()
  await expect(emailInput).toBeVisible()
  await expect(passwordHeading).toBeVisible()
  await expect(passwordInstructions).toBeVisible()
  await expect(passwordInput).toBeVisible()
  await expect(passwordVisibilityButton).toBeVisible()
}
