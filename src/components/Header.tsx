import React, { useState } from 'react'
import NextLink from 'next/link'
import { Transition } from '@headlessui/react'
import { Logo } from '../assets/icons/Logo'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEthers } from '@usedapp/core'
import Sun from '../assets/icons/Sun'
import Moon from '../assets/icons/Moon'
import { useTheme } from 'next-themes'

const items = [
  {
    href: '/',
    title: 'FrogEconomics',
  },
  {
    href: '/veNFT',
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

export const Header = (props: any) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  let { theme, setTheme } = useTheme()

  const { activateBrowserWallet, deactivate, account } = useEthers()

  async function connect() {
    activateBrowserWallet()
  }

  async function disconnect() {
    deactivate()
  }

  console.log(theme)

  if (typeof window !== undefined) {
    theme =
      typeof theme !== undefined
        ? theme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? theme === 'dark'
        : theme === 'light'
  }

  return (
    <header className="mb-12 px-4 pt-4 tablet:mb-[86px] tablet:px-12 tablet:pt-[22px] laptop:px-16">
      <nav className="container max-w-full">
        <div className="mx-auto flex max-w-full items-center justify-between">
          <Link href="/" passHref>
            <div className="logo hidden w-[121px] cursor-pointer items-center tablet:flex">
              <Logo />
              <div className="logo-text ml-[10px] text-sm font-bold text-frog-nation-gray dark:text-darkmode-offwhite">
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
                        ? 'text-theme dark:text-darkmode-offwhite'
                        : 'text-frog-nation-gray dark:text-darkmode-light-gray'
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
          <div className="flex items-center justify-between">
            {account ? (
              <button
                className="mr-6 h-[40px] w-[132px] rounded-full bg-theme py-[11px] px-[20px] text-xs font-bold text-white tablet:w-[153px] tablet:py-[10px] tablet:px-[23px] tablet:text-sm"
                onClick={disconnect}
              >
                Disconnect
              </button>
            ) : (
              <button
                className="mr-6 h-[40px] w-[132px] rounded-full bg-theme py-[11px] px-[20px] text-xs font-bold text-white tablet:w-[153px] tablet:py-[10px] tablet:px-[23px] tablet:text-sm"
                onClick={connect}
              >
                Connect wallet
              </button>
            )}

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
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
