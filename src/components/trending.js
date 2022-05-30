import React from 'react'
import "./trending.css"
import Brand from '../product/brands';
import New from '../product/new';
const Trending = () => {
    return (
        <>
            <h3 className='main-head-tren'>Trending</h3>
            <div className='grid-trending'>
                <div className='first-colom'>
                    {/* *** moving background area**** */}
                </div>
                <div className='second-colom'>
                    <div className='row-one'>
                        {Brand.map((curELem) => {
                            return (
                                <>
                                    <div className='trend-card'>
                                        <img height="120px" width="140px" className='brand-img' src={curELem.img} />
                                        <h4 className='brand-name'>{curELem.name}</h4>

                                    </div>
                                </>)
                        }
                        )
                        }

                    </div>
                     <h5 className='head-new-arrival'>New Arrival</h5>
                    <div className='row-two'>
                       
                        {New.map((curELem) => {
                            return (
                                <>
                                
                                    <div className='new-card'>
                                        <img height="90px" width="123px" className='new-img' src={curELem.img} />
                                        <h4 className='new-name'>{curELem.name}</h4>
                                        <p className="new-dis">{curELem.des}</p>
                                      
                                    </div>
                                </>
                            )

                        })
                        }
                    </div>

                </div>

            </div>
        </>
    )
};

export default Trending;