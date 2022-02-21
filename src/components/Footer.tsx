import React from 'react'
import Discord from '../assets/icons/Discord'
import Medium from '../assets/icons/Medium'
import Twitter from '../assets/icons/Twitter'

export default function Footer() {
  return (
    <div className="tablet:[mb-82px] mb-[74px] w-full">
      <div className="socials mx-auto mb-4 flex w-[144px] justify-between">
        <a
          target="_blank"
          href="https://discord.com/invite/MVadxyUmHZ"
          rel="noreferrer"
        >
          <Discord />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/FrogNationDAO"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          target="_blank"
          href="https://medium.com/@FrogNationDAO"
          rel="noreferrer"
        >
          <Medium />
        </a>
      </div>
      <div className="links mx-auto flex w-[365px] justify-between text-sm font-bold text-frog-nation-gray">
        <div>Terms & Conditions</div>
        <div>#FrogNation</div>
        <div>#OccupyDeFi</div>
      </div>
    </div>
  )
}
