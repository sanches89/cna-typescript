const fs = require('fs')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']

    const paths = fs.readdirSync(path.resolve(__dirname, '../src'))
      .filter(
        f => fs.statSync(path.join(__dirname, `../src/${f}`)).isDirectory()
      )
      .reduce((acc, dir) => {
        acc[`@/${dir}`] = path.resolve(__dirname, `../src/${dir}`)
        return acc
      }, {})

    config.resolve.alias = {
      ...config.resolve.alias,
      ...paths,
    }

    return config
  },
}
