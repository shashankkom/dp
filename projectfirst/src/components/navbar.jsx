import React, { useState } from 'react'
import "./nav.css"
import DOG from '../images/DOG.jpg'
function Navbar() {
    const [showLinks, setLinks] = useState(false);
    return (
    <div className='content__wrapper'>
        <div className='logo__content'>
        <img src={DOG} style={{height:`80px`,width:`150px`}}/>
        </div>
        <div className='content__item'>
        <ul className="link">
                <a href="#Home">
                    <li>Home</li></a>
                <a href="/Home">
                    <li>About Us</li></a>
                <a href="/Home">
                    <li>Contact Us</li></a>
                <a href="/Home">
                    <li>Categories</li></a>
                    </ul>
        </div>
    </div>
    );

}

export default Navbar
