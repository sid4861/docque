import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import authReducer from './store/reducers/auth.js';
import loginReducer from './store/reducers/login.js';
import saveQuestionReducer from './store/reducers/question.js';
import saveAnswerReducer from './store/reducers/answer.js';

import thunk from 'redux-thunk';
const composeEnhancers =  process.env.NODE_ENV==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    login: loginReducer,
    saveQuestion: saveQuestionReducer,
    saveAnswer: saveAnswerReducer
});

const store = createStore(
    rootReducer, composeEnhancers(
        applyMiddleware(thunk)
    )
  );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter> <App /> </BrowserRouter>
    </Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
