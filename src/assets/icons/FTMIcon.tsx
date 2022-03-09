import React from 'react'
import ftmIcon from '../ftm-icon.png'
import Image from 'next/image'

export default function FTMIcon() {
  return (
    <div>
      <Image src={ftmIcon} alt="ftm logo" />
    </div>
  )
}
