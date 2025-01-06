import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';

import './styles/global.css';
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

