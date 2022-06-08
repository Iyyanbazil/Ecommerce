import React from 'react'
import "./allProduct.css"
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios'
const AllProduct = () => {
// const Product =useSelector((state)=>state.Product)
// const dispatch=useDispatch()
  const [Product, setProduct] = useState([])
  useEffect(() => {
    // dispatch()
    axios.get("http://localhost:8000/").then((res)=>{
      setProduct(res.data)
      console.log(Product);
    }).catch((error)=>{
      console.log("error");
    })
  }, [])


  return (
    <>
    
    <h3 className='all-head'>Discover</h3>
  
    <div className='grid-all'>
      
    {Product.map((curELem)=>{
        return(
            <>
            <div className='all-card'>
        <img height="105px" width="120px" className='all-img' src={curELem.img}/>
        <p className='all-name'>{curELem.name}</p>
        <p className='all-dis'>{curELem.dis}</p>
        <p  className='all-price'><u>Rs/-{curELem.price}</u></p>
        <a href="#" className='link-show-more'>show more</a>
        </div>
        </>
        )

    })

    }
    </div>
    </>
  )
}

export default AllProduct