import axios from 'axios';
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess
} from './userActions';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/**1
 * get userlist api
 * @returns {function(...[*]=)}
 */
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get(`${BASE_URL}users`)
      .then(response => {
        // response.data is the users
        const users = response.data.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
