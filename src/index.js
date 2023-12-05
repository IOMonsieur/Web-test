// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import './index.css'; // Import index.css setelah tailwind.css
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
