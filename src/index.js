import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  
  {/* Provider is a higher-order component that provides the Redux store to any nested components below it */}  {/* Wrap your app with Provider to make Redux store available throughout your app */}   {/* Provider is used to provide the Redux store to any child components below it */}   {/* The Provider makes the Redux store available to any component that needs it */}   {/* You can now use the useSelector and useDispatch hooks from React-Redux to access the store */}   
    <App />
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
