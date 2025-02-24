import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <link rel="icon" type="image/png" href="img/logo.png" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
