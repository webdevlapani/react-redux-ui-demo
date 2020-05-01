import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'

/**
 * fetch user action
 * @returns {{type: string}}
 */
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

/**
 * fetch user success action
 * @param users
 * @returns {{payload: *, type: string}}
 */
export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

/**
 * fetch user data fail action
 * @param error
 * @returns {{payload: *, type: string}}
 */
export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
