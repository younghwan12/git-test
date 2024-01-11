import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// 여기는 테스트입니다.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
