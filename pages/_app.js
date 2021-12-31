import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
config.autoAddCss = false
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
