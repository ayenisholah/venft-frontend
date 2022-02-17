import React from 'react'
import NextLink from 'next/link'
import { Logo } from '../assets/icons/Logo'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Web3 from 'web3'
import { useAppDispatch } from '../state/hooks'
import fetchJson from '../utils/fetchJson'
import { IUser } from '../interfaces/user.interface'
import { handleAuthenticate, handleSignup } from '../utils/auth'
import { activate } from '../state/reducers/auth.reducer'

const items = [
  {
    href: '/frogeconomics',
    title: 'FrogEconomics',
  },
  {
    href: '/',
    title: 'veNFT',
  },
  {
    href: '/harvest',
    title: 'Harvest',
  },
  {
    href: '/tutorial',
    title: 'Tutorial',
  },
]

let web3: Web3 | undefined = undefined

export const Header = (props: any) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  async function handleClick() {
    if (!window.ethereum) {
      window.alert('Please install Metamask wallet first')
      return
    }

    if (!web3) {
      try {
        await window.ethereum.enable()
        web3 = new Web3(window.ethereum)
      } catch (error) {
        // show notification
        window.alert('You need to allow MetaMask.')
        return
      }
    }

    try {
      const coinbase = await web3.eth.getCoinbase()
      if (!coinbase) {
        window.alert('Please activate MetaMask first.')
        return
      }
      const account = coinbase.toLowerCase()
      const res: any = await fetchJson(`api/user?account=${account}`)
      const { user }: { user: IUser } = res

      const nonce = user.nonce

      const { signature } = await handleSignMessage({ account, nonce })

      const data = await handleAuthenticate({ account, signature })
      console.log({ data })

      dispatch(activate(account))
    } catch (error) {
      console.log(error)
      // show notification
      // }
    }
  }

  return (
    <header className="pt-[22px]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <div className="logo flex w-[121px] cursor-pointer items-center">
            <Logo />
            <div className="logo-text ml-[10px] text-sm font-bold text-frog-nation-gray">
              FrogNation
            </div>
          </div>
        </Link>
        <div className="nav-links flex w-[356px] items-center justify-between">
          {items.map((item) => (
            <NextLink key={item.href} href={item.href} passHref>
              <a
                className={`text-sm font-bold ${
                  router.asPath === item.href
                    ? 'text-theme'
                    : 'text-frog-nation-gray'
                }`}
              >
                {item.title}
              </a>
            </NextLink>
          ))}
        </div>
        <div>
          <button
            className="h-[40px] w-[153px] rounded-full bg-theme py-[10px] px-[23px] text-sm font-bold text-white"
            onClick={handleClick}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  )
}

export async function handleSignMessage({
  account,
  nonce,
}: {
  account: string
  nonce: string
}) {
  try {
    const signature = await web3!.eth.personal.sign(
      `I am signing my one-time nonce: ${nonce}`,
      account,
      '' // MetaMask will ignore the password argument here
    )

    return { account, signature }
  } catch (err) {
    throw new Error('You need to sign the message to be able to log in.')
    // show notification
  }
}
