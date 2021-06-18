const os = require('os')

const isMac = os.platform === 'darwin'

const browsers = ['chromium', 'firefox']

if (isMac) {
  browsers.push('webkit')
}

module.exports = {
  launchOptions: {
    headless: true,
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
  },
  browsers,
  devices: [],
  serverOptions: {
    command: 'npm run dev',
    port: 3000,
  },
}
