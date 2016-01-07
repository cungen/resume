import React from 'react';
import { render } from 'react-dom';
import {Router, Route, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';

injectTapEventPlugin();

render((
    <Router>
        <Route path='/' component={App} />
    </Router>
), document.getElementById('root'));
