import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="/signin" component={ Signin }></Route>
        <Route path="/signout" component={ Signout }></Route>
        <Route path="/signup" component={ Signup }></Route>
      </Route>
    </Router>

  </Provider>
  , document.querySelector('.container'));
