import React, { useEffect, useReducer, useState } from 'react'
import { addTodo, deleteTodo, fetchData, repairTodo } from '../../actions/actions-todo'
import Button from '../../components/button'
import Form from '../../components/form'
import Modal from '../../components/modal'
import { reducerFetchData } from '../../reducers/todoList'
import { initialState } from '../../store'

export default function Table() {
  const [state, dispatch] = useReducer(reducerFetchData, initialState)
  const [food, setFood] = useState('')
  const [price, setPrice] = useState(null)
  const [vote, setVote] = useState(null)
  const [id, setId] = useState(null)
  const [show, setShow] = useState(false)

  const handleAddTodoItem = e => {
    e.preventDefault();
    addTodo(dispatch, {
      namefood: food,
      price,
      vote
    })
  }
  const deleteTodoItem = id => deleteTodo(dispatch, id)
  const repairTodoItem = () => {
    const data = {
      namefood: food,
      price,
      vote
    }
    repairTodo(dispatch, data, id)
    setShow(false)
    resetValue()
  }
  const resetValue = () => {
    setFood('')
    setPrice(null)
    setVote(null)
  }
  const showModal = id => {
    setId(id)
    setShow(true)
    resetValue()
  }
  const hideModal = () => {
    setShow(false)
  }

  const changeValueFood = e => setFood(e.target.value)
  const changeValuePrice = e => setPrice(e.target.value)
  const changeValueVote = e => setVote(e.target.value)

  useEffect(() => {
    fetchData(dispatch)
  }, [])

  return (
    <div className="tabs">
      <h1>Quan Ly Nha Hang</h1>
      <Form
        name='Add'
        submit={handleAddTodoItem}
        fncFood={changeValueFood}
        fncPrice={changeValuePrice}
        fncVote={changeValueVote}
      />
      {
        show ? <Modal
          fncRepair={() => repairTodoItem()}
          fncHide={hideModal}
          fncFood={changeValueFood}
          fncPrice={changeValuePrice}
          fncVote={changeValueVote}
        /> : ''
      }
      <table>
        <tbody>
          {
            state.todoLists.map((value, key) => {
              if (key < 1) {
                return (
                  <tr key={key}>
                    { Object.keys(value).map((value, key) => <th key={key}>{value.toUpperCase()}</th>)}
                    <th></th>
                    <th></th>
                  </tr>
                )
              }
              return false
            })
          }
        </tbody>
        {
          state.isLoad ? (
            <tbody>
              <tr>
                <th>{state.messenger}</th>
              </tr>
            </tbody>
          ) :
            state.todoLists.map((value, key) => {
              return (
                <tbody key={key}>
                  <tr>
                    <th>{key}</th>
                    <th>{value.namefood}</th>
                    <th>{value.price}</th>
                    <th>{value.vote}</th>
                    <th>
                      <Button name='sua' fnc={() => showModal(value.id)} />
                    </th>
                    <th>
                      <Button name='xoa' fnc={() => window.confirm('ban co chac chan k') ? deleteTodoItem(value.id) : ''} />
                    </th>
                  </tr>
                </tbody>
              )
            })
        }
      </table>
    </div>
  )
}
