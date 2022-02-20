import { Provider as ReduxProvider } from 'react-redux'
import store from '../state/store'
import '../styles/globals.css'

function App({ Component, pageProps }: IApp) {
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
