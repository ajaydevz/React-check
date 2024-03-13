import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import CounterText from './Test/CounterText';
import Person1 from './Hod/Person1';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>  
      <App />
  </React.StrictMode>,
  root
);
