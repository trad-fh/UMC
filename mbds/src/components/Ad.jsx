import React from 'react'

export default function Ad({isAdActive}) {
  return (
    isAdActive && <img src="Untitled.svg" alt='Ad' width={'100%'}/>
  )
}
