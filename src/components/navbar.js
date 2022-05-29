import React from "react";
import "./navbar.css";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import {HiShoppingCart} from "react-icons/hi"
import {VscSearch} from "react-icons/vsc"
import { Button } from 'react-bootstrap';
const Navbar = () => {
  const [toggel, settoggel] = useState(false);
  const toggleBtn=()=>{
    settoggel(!toggel)
    console.log(toggel)
    
    }
    

  return (
    
    <>
    
      <nav>
       
        <p className="name">Shop</p>
        <input placeholder="Search Items" className="search-bar" type="text" />
        <button className="Search-btn" ><VscSearch /></button>
      
        {toggel && (
        
          <ul className="navbar-list">
            {/* <li className="navbar-list-item">Sale</li> */}
            <li className="navbar-list-item">Catagories</li>
            <li className="navbar-list-item">Cart</li>
          </ul>
        )
        }
        {/* <div className="nav-div">
          <select name="options" className="dropDown">
            
            <option>Sale</option>
            <option value="Catagories">Catagories</option>
            <option value="Cart">Cart</option>
          </select>
        </div> */}
       <label for="options" className="bars-icons">
          <GoThreeBars onClick={toggleBtn}  />
        </label>
          <ul className="navbar-list">
            <li className="navbar-list-item">Sale</li>
            <li className="navbar-list-item">Catagories</li>
            <li className="navbar-list-item-cart"><HiShoppingCart size={"2.5rem"}  /></li>
          </ul>
        
      </nav>
    </>
  );
  <Button  variant="secondary" className="mx-2">Button #2</Button>
};

export default Navbar;
