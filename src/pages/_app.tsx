import React from 'react'

import {AppProps} from 'next/app'
import Head from 'next/head'

import {ThemeProvider} from 'styled-components'

import {theme} from '@/styles/theme'

/**
 * @see https://dev.to/hankchizljaw/a-modern-css-reset-6p3
 */
import 'modern-css-reset/dist/reset.css'

const viewport = [
  'minimum-scale=1',
  'initial-scale=1',
  'width=device-width',
  'shrink-to-fit=no',
  'user-scalable=no',
  'viewport-fit=cover',
].join(', ')

function MyApp({Component, pageProps}: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content={viewport} />

        <meta name="description" content="Create Next App - TypeScript" />
        <meta
          name="keywords"
          content="Next.js, Create Next App, CNA, TypeScript, TS"
        />

        {/* https://realfavicongenerator.net/ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <title>CNA | TypeScript</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
