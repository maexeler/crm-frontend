import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom"
import {StoreProvider} from 'easy-peasy'

import CrmApp from './App';
import store from './store/ModelStore'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <CrmApp />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
