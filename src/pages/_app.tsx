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

        <meta name="theme-color" content="#f9f9f9" />

        <link rel="manifest" href="/manifest.json" />

        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />

        <link rel="apple-touch-icon" href="/icons/icon-512x512.png"></link>

        <title>CNA | TypeScript</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
