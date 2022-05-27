import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import wrapper from '@/modules/redux/store'

const MyApp=({ Component, pageProps }: AppProps)=> {
  return <Component {...pageProps} />

}
export default MyApp;