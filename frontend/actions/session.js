import { postUser, postSession, deleteSession } from '../utils/session'
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

//user is payload in line 8
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

//it will let a reducer know that user logged out with message
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

//use in our containers - thunk action - logging user in - creates new user
//form user is from form - gets a dispatch from thunk middleware - then use dispatch to call on postUser(formUser)
//since this is a ajax call, we can chain a .then
export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

//thunk action for logging out user
export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

//logout user - return a dispatch call to reducer to log out
export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));