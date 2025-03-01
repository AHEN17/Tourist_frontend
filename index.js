import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './utils/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
