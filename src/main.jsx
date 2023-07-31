import React from 'react';
import ReactDOM from 'react-dom/client';
import './include/languages';

import { BrowserRouter } from 'react-router-dom';
import { AppRouter, Footer, NavBar } from './website/websiteComponents.js'

import "./index.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
