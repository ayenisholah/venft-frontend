import { Header } from './Header'

export const Layout = (props: any) => {
  const { children } = props

  return (
    <>
      <Header />
      {children}
    </>
  )
}
