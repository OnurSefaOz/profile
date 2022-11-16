import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/base.css';
import Navigation from "./Navbar";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Art from "./Art";
import Writings from "./Writings";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/art" element={<Art></Art>} />
      <Route path='/writings' element={<Writings></Writings>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
