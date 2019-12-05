import {CREATE_NEW_LIST} from './list-actions-creator'
import lists from './list-initial-state'

export default (state = lists, action) => {
  switch (action.type) {
    case CREATE_NEW_LIST:
      return [
          ...state, 
          action.payload
      ]
    default:
      return state
  }

}