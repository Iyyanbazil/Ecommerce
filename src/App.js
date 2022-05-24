import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as router ,routes,route} from 'react-router-dom'
import Carousell from './components/carousel';
import Promotions from './components/promotions';
function App() {
  return (
    <>
   <Navbar/>
    {/* <h1>hello</h1>   */}
    <Carousell/>
    <Promotions/>
    
    </>
  );
}

export default App;
