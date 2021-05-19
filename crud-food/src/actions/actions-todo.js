import {
  formData,
  formDeleteData,
  formRepairData,
  getData
} from "../apis/apis"

import {
  FETCH_DATA,
  FETCH_DATA_FAIL,
  FETCH_DATA_SUCCESS,
  URL_TODO_LIST
} from "../constants/actions-types"

const addTodo = (dispatch, data) => {
  formData(URL_TODO_LIST, 'POST', data)
    .then(() => {
      fetchData(dispatch)
    })
}
const deleteTodo = (dispatch, id) => {
  formDeleteData(URL_TODO_LIST, 'DELETE', id)
    .then(() => {
      fetchData(dispatch)
    })
}
const repairTodo = (dispatch, data, id) => {
  formRepairData(URL_TODO_LIST, 'PUT', data, id)
    .then(() => {
      fetchData(dispatch)
    })
}

const fetchData = dispatch => {
  getData(URL_TODO_LIST)
    .then(res => {
      dispatch({ type: FETCH_DATA, load: true })
      return res.json()
    })
    .then(data => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        load: false,
        payload: data
      })
    })
    .catch(err => dispatch({
      type: FETCH_DATA_FAIL,
      load: false,
      err
    }))
}

export {
  addTodo,
  fetchData,
  deleteTodo,
  repairTodo
}
