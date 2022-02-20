import React, { useState } from 'react'
import NextLink from 'next/link'
import { Transition } from '@headlessui/react'
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
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    <header className="mb-12 px-4 pt-4 tablet:mb-[86px] tablet:px-12 tablet:pt-[22px] laptop:px-16">
      <nav className="container max-w-full">
        <div className="mx-auto flex max-w-full items-center justify-between">
          <Link href="/" passHref>
            <div className="logo hidden w-[121px] cursor-pointer items-center tablet:flex">
              <Logo />
              <div className="logo-text ml-[10px] text-sm font-bold text-frog-nation-gray">
                FrogNation
              </div>
            </div>
          </Link>
          <div className="hidden tablet:block">
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
          </div>
          <div className="mr-10 flex tablet:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md  p-2 text-theme"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div>
            <button
              className="h-[40px] w-[132px] rounded-full bg-theme py-[11px] px-[20px] text-xs font-bold text-white tablet:w-[153px] tablet:py-[10px] tablet:px-[23px] tablet:text-sm"
              onClick={handleClick}
            >
              Connect wallet
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="absolute tablet:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="space-y-1 bg-white px-2 pt-2 pb-3 mobile:px-3"
              >
                {items.map((item) => (
                  <NextLink key={item.href} href={item.href} passHref>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-md px-3 py-2 text-sm font-bold hover:text-theme ${
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
            </div>
          )}
        </Transition>
      </nav>
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
