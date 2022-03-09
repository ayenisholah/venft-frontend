import '../styles/globals.css'
import { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { Mainnet, DAppProvider, Config } from '@usedapp/core'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

function App({ Component, pageProps }: IApp) {
  const getLayout = Component.getLayout ?? ((page: any) => page)

  useEffect(() => {
    localStorage.setItem('theme', 'light')
  }, [])

  return (
    <DAppProvider config={config}>
      <ThemeProvider attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </DAppProvider>
  )
}

export default App

export interface IApp {
  Component: any
  pageProps: any
}
