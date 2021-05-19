import React from 'react'
import Button from './button'
import Input from './input'

export default function Modal({
  name,
  fncRepair,
  fncHide,
  fncFood,
  fncPrice,
  fncVote
}) {
  return (
    <div className="modal">
      <Input 
        fnc={fncFood}
      />
      <Input 
        fnc={fncPrice}
      />
      <Input
        fnc={fncVote}
      />
      <Button name='ok' fnc={fncRepair} />
      <Button name='cancel' fnc={fncHide} />
    </div>
  )
}
