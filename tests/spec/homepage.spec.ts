import { test, expect } from '@playwright/test'
import { homepageSmokeTests } from './shared/homepageSmokeTests'
import { signupPageSmokeTests } from './shared/signupSmoketests'

test('Information about the site is displayed on the homepage', async ({
  page,
}) => {
  await page.goto('/')

  const heading1 = page.getByRole('heading', { name: 'Shady landlord?' })
  const heading2 = page.getByRole('heading', { name: 'Inaccurate listing?' })
  const heading3 = page.getByRole('heading', {
    name: 'Deadbeat property manager?',
  })
  const heading4 = page.getByRole('heading', {
    name: 'Research your next rental.',
  })
  const heading5 = page.getByRole('heading', {
    name: 'Protect future renters.',
  })

  await expect(heading1).toBeVisible()
  await expect(heading2).toBeVisible()
  await expect(heading3).toBeVisible()
  await expect(heading4).toBeVisible()
  await expect(heading5).toBeVisible()
})

test('Homepage address search prompts user to log in in order to create a rating', async ({
  page,
}) => {
  await page.goto('/')

  await homepageSmokeTests(page)

  /** Search for a bogus address to ensure the CTA is pulled up */
  const streetInput = page.getByLabel('Street')
  await streetInput.fill('XXXXXXXXXXXXXXXXXXX')

  const ctaDescription = page.getByText(
    "Not finding the address you're looking for? Sign up to advocate for yourself and protect other renters!",
  )

  const ctaButton = page.getByRole('link', { name: 'Sign Up' })

  await expect(ctaDescription).toBeVisible()
  await expect(ctaButton).toBeVisible()

  /** Navigate to Sign Up page */
  await page.getByRole('link', { name: 'Sign Up' }).click()

  await signupPageSmokeTests(page)
})
