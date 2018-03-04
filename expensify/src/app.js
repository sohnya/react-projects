import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Normalize default styles in all browsers 
// If this is not there, all browsers will look different
// Won't work in a cross-browser setting.
import 'normalize.css/normalize.css';

// Our styles
import './styles/styles.scss';

// Our router
import AppRouter from './routers/AppRouter'

ReactDOM.render(<AppRouter />, document.getElementById('app'));