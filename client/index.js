import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import styles from './scss/index.scss';

const root = createRoot(document.getElementById('app'));

root.render(
  <Provider store="store">
    <App />
  </Provider>
);

