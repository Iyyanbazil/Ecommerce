import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as router ,routes,route} from 'react-router-dom'
import Home from './components/home';
function App() {
  return (
    <>
   <Navbar/>
    <Home/>
   
    
    </>
  );
}

export default App;
