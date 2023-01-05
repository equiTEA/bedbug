import type { Page } from '@playwright/test'

export const scrollToBottom = async (page: Page) => {
  /** Scroll the bottom of the form into view */
  await page.evaluate(() =>
    document
      .querySelector('aside')
      ?.scrollTo(
        0,
        document.querySelector('aside')?.getBoundingClientRect()?.height ?? 0,
      ),
  )
}
