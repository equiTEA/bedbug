import { test, expect } from '@playwright/test'

test('Password visibility button works', async ({ page }) => {
  await page.goto('/signin')

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
