import {chromium, ChromiumBrowser, Page} from 'playwright'

describe('Home', () => {
  let browser: ChromiumBrowser
  let page: Page

  beforeAll(async () => {
    browser = await chromium.launch()
  })
  afterAll(async () => {
    await browser.close()
  })

  beforeEach(async () => {
    page = await browser.newPage()
  })
  afterEach(async () => {
    await page.close()
  })

  it('should work', async () => {
    await page.goto('http://localhost:3000/')
    expect(await page.title()).toBe('CNA | TypeScript')
  })
})
