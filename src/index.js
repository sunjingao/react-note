import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducers from "./reducers/reducer"
import "jquery/dist/jquery"

import "./css/css.css"
import "bootstrap/dist/css/bootstrap.css"

let store =createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
