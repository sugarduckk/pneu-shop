import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import adminStore from './redux/adminStore';
import 'firebase-wrapper';

const rootNode = document.getElementById("container");
ReactDOM.render(<Provider store={adminStore}>
  <App />
</Provider>, rootNode);