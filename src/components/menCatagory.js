import React from 'react'
import { Carousel } from 'react-bootstrap'
import Data from "../product/Data"
import "./menCatagory.css"
const MenCatagory = () => {
  return (
    <>
    <h3 className='main-head-men'>For Mens</h3>
    {/* <div className='grid-men'>
    {Data.map((curELem)=>{
        return(
            <>
            <div className='product-card'>
        <img height="120px" width="140px" src={curELem.img}/>
        <h4 className='men-name'>{curELem.name}</h4>
        <p>{curELem.des}</p>
        </div>
        </>
        )

    })

    }
    </div> */}
   
    <Carousel variant="dark" indicators="" wrap="">
  <Carousel.Item>
  <div className='grid-men'>
    {Data.map((curELem)=>{
        return(
            <>
            <div className='product-card'>
        <img height="120px" width="140px" src={curELem.img}/>
        <h4 className='men-name'>{curELem.name}</h4>
        <p className="product-dis">{curELem.des}</p>
        <a href="#" className="link-show-more">show more</a>
        </div>
        </>
        )

    })

    }
    </div>
  
  </Carousel.Item>
  <Carousel.Item>
  <div className='grid-men'>
    {Data.map((curELem)=>{
        return(
            <>
            <div className='product-card'>
        <img height="120px" width="140px" src={curELem.img}/>
        <h4 className='men-name'>{curELem.name}</h4>
        <p className='product-dis'>{curELem.des}</p>
        <a href="#" className='link-show-more'>show more</a>
        </div>
        </>
        )

    })

    }
    </div>
  </Carousel.Item>
 
</Carousel>
    </>
  )
}

export default MenCatagory