import { Provider as ReduxProvider } from 'react-redux'
import store from '../state/store'
import '../styles/globals.css'
import { ethers, BigNumber } from 'ethers'
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
    console.log(account)

    // console.log(await contract.methods.supply().call())
  }

  useEffect(() => {
    load()
  }, [])

  // async function connectAccounts() {
  //   if (window.ethereum) {
  //     const accounts = await window.ethereum.request({
  //       method: 'eth_requestAccounts',
  //     })
  //     setAccounts(accounts)
  //   }
  // }

  // async function contract() {
  //   if (window.ethereum) {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)

  //     const signer = provider.getSigner()

  //     const contract = new ethers.Contract(VENFT_ADDRESS, VENFT_ABI, signer)

  //     const contractWithSigner = contract.connect(signer)

  //     console.log(
  //       'hello',
  //       contractWithSigner.functions.epoch({
  //         gasPrice: 1000,
  //         gasLimit: 90000000,
  //       })
  //     )

  //     try {
  //       // const response = await contract.
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   connectAccounts()
  // }, [])

  // useEffect(() => {
  //   contract()
  // }, [accounts])

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
