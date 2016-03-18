import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Root from './components/root';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Root />
    </Provider>
    , document.getElementById('root')
);
