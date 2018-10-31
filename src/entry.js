import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './Store';
import App from './App';

// exposes webpack variable RELEASE
/*global RELEASE:true*/
/*eslint no-undef: "error"*/

ReactDOM.render(
    <Provider store={ init().getStore() }>
        <Router basename={ `/${RELEASE}/platform/advisor` }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
