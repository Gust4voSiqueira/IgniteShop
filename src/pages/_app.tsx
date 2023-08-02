import { AppProps } from 'next/app'

import { Container } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'

import { CartContextProvider } from '@/contexts/CartContext'
import { HeaderComponent } from '@/components/header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <HeaderComponent />

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
