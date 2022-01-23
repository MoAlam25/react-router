import '../Styles/Navbar.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance'
import { logDOM } from '@testing-library/react'
import logo from '../Images/bank-of-react-logo.png'

export default function Navbar() {
    return (
        <div className="home--nav">
            {/* <img src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png" alt="bank" className="logo-img" /> */}

            <img src={logo} alt="Bank Of React Logo" className="logo-img" />

            {/* Link component takes a very simple prop to= that tells us where we want to redirect */}
            <Link to="/" className="home--page">Home</Link>
            <Link to="/userProfile" className="home--userprofile">User Profile</Link>
            <Link to="/login" className="home--login">Login</Link>
            <Link to="/credits" className="home--credits">Credits</Link>
            <Link to="/debits" className="home--debits">Debits</Link>
        </div>
    )
}