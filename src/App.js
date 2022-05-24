import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as router ,routes,route} from 'react-router-dom'
import Carousell from './components/carousel';
function App() {
  return (
    <>
   <Navbar/>
    {/* <h1>hello</h1>   */}
    <Carousell/>
    
    </>
  );
}

export default App;
