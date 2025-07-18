import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './App/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

