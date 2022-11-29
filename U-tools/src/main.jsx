import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' 

import {BrowserRouter} from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import { ConfigProvider } from './context/ConfigContext'
import { UserContextProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ConfigProvider>
    <BrowserRouter>
       <UserContextProvider> 
        <App />
          <ToastContainer theme='dark' position='bottom-right'/>
        <LoadingSpinner />
       </UserContextProvider> 
    </BrowserRouter>
   </ConfigProvider>
  </React.StrictMode>
)
