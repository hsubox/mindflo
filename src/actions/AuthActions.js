import firebase from 'firebase';
import history from './../history';
import {
  LOGIN_FORM_UPDATE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
} from './types';

export const loginFormUpdate = (field, value) => {
  return {
    field,
    type: LOGIN_FORM_UPDATE,
    value,
  };
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    user,
  });
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER_BEGIN});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        loginUserSuccess(dispatch, user);
        history.push('/user');
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            loginUserSuccess(dispatch, user);
            history.push('/user');
          })
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const logoutUserFail = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_FAIL,
  });
};

const logoutUserSuccess = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS,
  });
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: LOGOUT_USER_BEGIN});

    firebase.auth().signOut()
      .then(() => {
        logoutUserSuccess(dispatch);
        history.push('/');
      })
      .catch(() => {
        logoutUserFail(dispatch);
        history.push('/');
      });
  };
};
