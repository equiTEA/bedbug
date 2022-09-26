import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@mui/material'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <CssBaseline />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
