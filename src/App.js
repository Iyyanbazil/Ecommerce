import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as router, routes, route } from 'react-router-dom'
import Home from './components/home';
function App() {
  
  return (
    <>

      <Navbar />
      {/* {post.map((curElem)=>{
        <h1>{curElem.name}</h1>
      })} */}
      <Home />


    </>
  );
}

export default App;
