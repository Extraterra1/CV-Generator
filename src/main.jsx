import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import WebFont from 'webfontloader';
import './index.css';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
