import {
  FETCH_DATA,
  FETCH_DATA_FAIL,
  FETCH_DATA_SUCCESS
} from "../constants/actions-types"

const reducerFetchData = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoad: action.load,
        messenger: "Loading ..."
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoad: action.load,
        todoLists: [...action.payload],
        messenger: ""
      }
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isLoad: action.load,
        errorMessenger: action.err
      }
    default:
      return state
  }
}

const reducerTodoList = (state, action) => {
  switch (action.type) {
    
  }
}

export { reducerFetchData, reducerTodoList }
