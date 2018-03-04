import React from 'react';
import ReactDOM from 'react-dom';

// Normalize default styles in all browsers 
// If this is not there, all browsers will look different
// Won't work in a cross-browser setting.
import 'normalize.css/normalize.css';

// Our styles
import './styles/styles.scss';

ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById('app'));