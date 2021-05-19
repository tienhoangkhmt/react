import React from 'react'
import Input from './input'

export default function Form({name, submit, fncFood, fncPrice, fncVote}) {
  return (
    <form onSubmit={submit}>
      <Input 
        type='text' 
        fnc={fncFood} 
      />
      <Input
        type='text' 
        fnc={fncPrice} 
      />
      <Input 
        type='text' 
        fnc={fncVote} 
      />
      <button type='submit'>{name}</button>
    </form>
  )
}
