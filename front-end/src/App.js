import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './Page/Login';
import Register from './Page/Register';
import CustomerProducts from './Page/CustomerProducts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/customer/products" element={ <CustomerProducts /> } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
