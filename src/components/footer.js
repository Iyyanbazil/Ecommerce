import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='first'>
                    <h2 className='heading'>CATAGORIES</h2>
                    <ul className='list'>
                        <li>Men's</li>
                        <li>Kids</li>
                        <li>New Arrival</li>
                        <li>Trending</li>
                        <li>Sale</li>
                        <li>Discount</li>
                    </ul>
                </div>
                <div className='second'>
                <h2 className='heading'>BRANDS</h2>
                    <ul className='list'>
                        <li>Wood Grains</li>
                        <li>Lewis</li>
                        <li>Nike</li>
                        <li>Del/Hp</li>
                        <li>Ray Ban</li>
                        <li>Addidas</li>
                    </ul>
                </div>
                <div className='third'>
                    <h1 className='heading'>FIND US</h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <h1>footer</h1>
            </div>
        </>
    )
}

export default Footer