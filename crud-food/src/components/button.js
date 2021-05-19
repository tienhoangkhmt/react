import React from 'react'

export default function Button({name, fnc}) {
  return (
    <button onClick={fnc}>
      {name}
    </button>
  )
}
