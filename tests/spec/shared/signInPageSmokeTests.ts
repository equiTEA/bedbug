import { Page, expect } from '@playwright/test'

export const signInPageSmokeTests = async (page: Page) => {
  const signInHeading = page.getByRole('heading', { name: 'Sign In' })
  const emailInput = page.getByLabel('Email')
  const passwordInput = page.getByLabel('Password')
  const signInButton = page.getByRole('button', { name: 'Sign In' })

  await expect(signInHeading).toBeVisible()
  await expect(emailInput).toBeVisible()
  await expect(passwordInput).toBeVisible()
  await expect(signInButton).toBeVisible()
}
