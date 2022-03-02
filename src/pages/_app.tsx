import { Provider as ReduxProvider } from 'react-redux'
import store from '../state/store'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { VENFT_ADDRESS, VENFT_ABI } from '../../config'
import Web3 from 'web3'

function App({ Component, pageProps }: IApp) {
  const [account, setAccount] = useState<string | null>(null)

  async function load() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    const accounts = await web3.eth.requestAccounts()
    setAccount(accounts[0])
    const contract = new web3.eth.Contract(VENFT_ABI, VENFT_ADDRESS)
  }

  useEffect(() => {
    load()
  }, [])

  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <ReduxProvider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </ReduxProvider>
  )
}

export default App

export interface IApp {
  Component: any
  pageProps: any
}
