import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import Routes from './Routes';
import reducer from './reducers';
import { logger } from 'redux-logger'
import Thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(Thunk, logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
        <Routes />
    </Provider>
    , document.getElementById('root'));

