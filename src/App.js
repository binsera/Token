import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <Login/>
          </div>
          <div class="col-lg-6">
            <Register/>
            </div>
  
        </div>
      </div>
    </div>
  );
}

export default App;
