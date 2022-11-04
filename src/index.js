import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './root';
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";
import RootContext from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContext>
        <Root />
      </RootContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
