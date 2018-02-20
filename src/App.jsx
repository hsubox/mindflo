import firebase from 'firebase';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import ReduxThunk from 'redux-thunk';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import MainNavBar from './components/MainNavBar';
import UserAccountInfo from './components/UserAccountInfo';
import history from './history';
import reducers from './reducers';

export class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA5nItP6Kjpmzujc4XeNMxnuiGbHd6rwKM',
      authDomain: 'mindflo-2e3bb.firebaseapp.com',
      databaseURL: 'https://mindflo-2e3bb.firebaseio.com',
      messagingSenderId: '346734458445',
      projectId: 'mindflo-2e3bb',
      storageBucket: 'mindflo-2e3bb.appspot.com',
    };

    firebase.initializeApp(config);
  }

  render() {
    const reducer = asyncInitialState.outerReducer(reducers);

    const loadStore = (currentState) => {
      return new Promise((resolve) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            resolve({
              ...currentState,
              auth: {
                ...currentState.auth,
                user: user,
              },
            });
          } else {
            resolve({
              ...currentState,
            });
          }
        });
      });
    };

    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk, asyncInitialState.middleware(loadStore)));

    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <MainNavBar />
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/login' component={LoginForm} />
              <Route path='/user' component={UserAccountInfo} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
