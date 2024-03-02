import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter as Router }  from 'react-router-dom' ;
import { Provider } from 'react-redux'
import Store from './components/Store/store.js';
import  { ToastContainer } from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {Store}>
        <Router>
           <App />
        </Router>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
