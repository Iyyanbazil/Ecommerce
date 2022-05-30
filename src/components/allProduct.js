import React from 'react'
import All from '../product/all'
import "./allProduct.css"
const AllProduct = () => {
  return (
    <>
    <h3 className='all-head'>Discover</h3>
    <div className='grid-all'>
    {All.map((curELem)=>{
        return(
            <>
            <div className='all-card'>
        <img height="120px" width="154px" className='all-img' src={curELem.img}/>
        <h4 className='all-name'>{curELem.name}</h4>
        <p className='all-dis'>{curELem.des}</p>
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