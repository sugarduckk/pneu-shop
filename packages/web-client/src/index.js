import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import clientStore from './redux/clientStore';
import 'firebase-wrapper';

const rootNode = document.getElementById("container");
ReactDOM.render(<Provider store={clientStore}>
  <App />
</Provider>, rootNode);