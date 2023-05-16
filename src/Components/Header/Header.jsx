import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerCenter'>

                <div className='headerLeft'>
                    <h3 className='headerHead'>SHOP</h3>

                    <div>
                        Men
                    </div>
                    <div>
                        Women
                    </div>
                </div>

                <div className="headerMid">
                    <input type="text" placeholder='Search for items' style={{ width: "400px", height: "25px", borderRadius: "10px" }} />
                </div>

                <div className="headerRight">
                    <ul className='headerRightUl'>
                        <li>User</li>
                        <li>Wishlist</li>
                        <li>Cart</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header