import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalProvider } from "./Components/utils/global.context.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalProvider>
        <App/>
      </GlobalProvider>  
  </React.StrictMode>
);