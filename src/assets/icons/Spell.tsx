import React from 'react'
import spell from '../spell.png'
import Image from 'next/image'

export default function Spell() {
  return (
    <div>
      <Image src={spell} alt="spell logo" />
    </div>
  )
}
