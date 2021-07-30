import {firefox, FirefoxBrowser, Page} from 'playwright'

describe('Home', () => {
  let browser: FirefoxBrowser
  let page: Page

  beforeAll(async () => {
    browser = await firefox.launch()
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
