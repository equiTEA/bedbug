import { expect, test } from '@playwright/test'
import { testUser } from '../fixtures/testUser'

import { scrollToBottom } from './shared/utils/scrollToBottom'
import { signupPageSmokeTests } from './shared/signupSmokeTests'
import { homepageSmokeTests } from './shared/homepageSmokeTests'
import { signInPageSmokeTests } from './shared/signInPageSmokeTests'

test('Sign up page renders correctly', async ({ page }) => {
  await page.goto('/signup')
  await signupPageSmokeTests(page)
})

test('Sign up page functions correctly and signs the user in', async ({
  page,
}) => {
  await page.goto('/signup')

  /** Fill out the form and submit */
  const usernameInput = page.getByLabel('Username')
  const emailInput = page.getByLabel('Email')
  const passwordInput = page.getByLabel('Password')
  const submitButton = page.getByRole('button', { name: 'Sign Up' })

  await usernameInput.fill(testUser.username)
  await emailInput.fill(testUser.email)
  await passwordInput.fill(testUser.password)

  const hCaptcha = page
    .frameLocator('[id="__next"] iframe')
    .getByRole('checkbox', {
      name: 'hCaptcha checkbox. Select in order to trigger the challenge, or to bypass it if you have an accessibility cookie.',
    })

  await scrollToBottom(page)

  await hCaptcha.click()

  /** Wait for state to register hCaptcha success */
  await page.waitForTimeout(1000)

  await submitButton.click()
  await page.waitForNavigation()

  await homepageSmokeTests(page)
})

test('Sign up page offers a link to sign in instead if the user already has an account', async ({
  page,
}) => {
  await page.goto('/signup')
  const signInLink = page.getByRole('link', { name: 'Sign In' })
  const signInInstructions = page.getByText('Already have an account?')

  await expect(signInLink).toBeVisible()
  await expect(signInInstructions).toBeVisible()

  await signInLink.click()
  await page.waitForNavigation()

  await signInPageSmokeTests(page)
})

test('Password visibility button works', async ({ page }) => {
  await page.goto('/signup')

  const passwordInput = page.getByLabel('Password')
  const passwordVisibilityButton = page.locator(
    '[aria-label="toggle password visibility"]',
  )

  await expect(passwordInput).toHaveAttribute('type', 'password')
  await passwordVisibilityButton.click()
  await expect(passwordInput).toHaveAttribute('type', 'text')
  await passwordVisibilityButton.click()
  await expect(passwordInput).toHaveAttribute('type', 'password')
})
