import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// REDUX
import { Provider } from 'react-redux';
import store from './store/index';

//styles
import './index.css';
import './bootstrap-4.1.3-dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
            <App />   
      </BrowserRouter>
   </Provider>,
   document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
