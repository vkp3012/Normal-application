/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../components/basic/Logo'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo/>
            <div className='navbar1'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/massage">Massage</Link></li>
                    <li><Link to="/reals">Reals</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
