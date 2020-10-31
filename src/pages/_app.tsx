import React from 'react'

import {AppProps} from 'next/app'
import Head from 'next/head'

import {ThemeProvider} from 'styled-components'

import {theme} from '@/styles/theme'

import 'normalize.css/normalize.css'
import 'modern-css-reset/dist/reset.css'

const viewport = [
  'minimum-scale=1',
  'initial-scale=1',
  'width=device-width',
  'shrink-to-fit=no',
  'user-scalable=no',
  'viewport-fit=cover',
].join(', ')

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="description" content="" />
        <meta name="viewport" content={viewport} />

        <link rel="shortcut icon" href="/favicon.ico" />

        <title>CNA | TypeScript</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
