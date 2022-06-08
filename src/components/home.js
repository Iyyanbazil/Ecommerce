import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Carousell from './carousel'
import Promotions from './promotions'
import MenCatagory from './menCatagory'
import Trending from './trending'
import AllProduct from './allProduct'
import Footer from './footer'
const Home = (props) => {

  return (
    <>
     <Carousell/>
     
    <Promotions/>
    <MenCatagory/>
    <Trending/>
    <AllProduct/>
    <Footer/>
    
    </>
  )
}

export default Home