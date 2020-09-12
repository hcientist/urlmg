import puppeteer from 'puppeteer'

const POSSIBLE_SRCS = [
  'og',
  'touch',
  'fav',
  'screenshot'
];

export default async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  try {
    const images = await Promise.all([
      await page.evaluate(() => document.querySelector('meta[property="og:image"]')?.content),
      await page.evaluate(() => document.querySelector('link[rel^="apple-touch-icon"]')?.href),
      await page.evaluate(() => document.querySelector('link[rel^="shortcut"]')?.href),
      'data:image/png;base64,' + await page.screenshot({ encoding: 'base64' })
    ])
    const results = Object.fromEntries(POSSIBLE_SRCS.map((src, i) => [src, images[i]]))
    return results
  } finally {
    await browser.close()
  }
}
