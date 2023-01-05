import { expect, Page } from '@playwright/test'

export const homepageSmokeTests = async (page: Page) => {
  const pageTitle = page.getByRole('heading', { name: 'Search for an address' })
  const pageSubtitle = page.getByText(
    "If somebody has rated it, we'll present it below.",
  )
  const streetInput = page.getByLabel('Street')
  const cityInput = page.getByLabel('City')
  const stateSelect = page.getByLabel('State')
  const zipCodeInput = page.getByLabel('Zip Code')
  const emptyStateInstructions = page.getByText(
    'Search for an address above to get started!',
  )

  await expect(pageTitle).toBeVisible()
  await expect(pageSubtitle).toBeVisible()
  await expect(streetInput).toBeVisible()
  await expect(cityInput).toBeVisible()
  await expect(stateSelect).toBeVisible()
  await expect(zipCodeInput).toBeVisible()
  await expect(emptyStateInstructions).toBeVisible()
}
