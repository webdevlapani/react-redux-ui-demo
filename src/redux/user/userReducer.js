import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'
import {reverse_sort} from '../../common/utils/commonUtilities';

// Initial state values for userReducer
const initialState = {
  loading: false,
  users: [],
  error: ''
}

/**
 * User reducer return state based on action
 * @param state
 * @param action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload.sort((a,b) => reverse_sort(a, b, 'first_name')).slice(0,15),
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
