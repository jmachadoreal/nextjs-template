import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect } from 'react'

import { Provider } from 'react-redux'

import ProgressBar from '@badrap/bar-of-progress'
import { ChakraProvider } from '@chakra-ui/react'
import dayjs from 'dayjs'
import tzPlugin from 'dayjs/plugin/timezone'
import utcPlugin from 'dayjs/plugin/utc'
import { SWRConfig } from 'swr'

import 'dayjs/locale/pt-br'

import config from '@config/swr'
import { store } from '@store/index'

import theme from '@style/theme'

import Env from '@util/Env'

dayjs.locale('pt-br')
dayjs.extend(utcPlugin)
dayjs.extend(tzPlugin)

const progress = new ProgressBar({
  color: Env.public('ACTIVITY_COLOR', 'black'),
  delay: 100,
  size: 4
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const start = () => {
      progress.start()
    }

    const finish = () => {
      progress.finish()
    }

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', finish)
    Router.events.on('routeChangeError', finish)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', finish)
      Router.events.off('routeChangeError', finish)
    }
  }, [])

  return (
    <SWRConfig value={config}>
      <Provider store={store}>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </SWRConfig>
  )
}

export default MyApp
