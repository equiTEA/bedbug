import '../styles/globals.css'

import Head from 'next/head'
import theme from '../theme'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from '../ssr/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>bedbug</title>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
