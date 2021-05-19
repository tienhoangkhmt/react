import React from 'react'

export default function Input({type, fnc}) {
  return (
    <input 
      type={type}
      onChange={fnc}
    />
  )
}
