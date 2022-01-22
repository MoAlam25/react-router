import '../Styles/App.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

export default function Home(props) {

    return (
        <div>
        <div className="home--nav">
            {/* <img src="https://i1.wp.com/fintechranking.com/wp-content/uploads/2016/03/fintech-01.png?fit=2613%2C1503&ssl=1" alt="bank" className="logo-img" /> */}
            <img src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png" alt="bank" className="logo-img" />

            {/* Link component takes a very simple prop to= that tells us where we want to redirect */}
            <Link to="/userProfile" className="home--userprofile">User Profile</Link>
            <Link to="/login" className="home--login">Login</Link>
            </div>
        <div>
        <AccountBalance accountBalance={props.accountBalance} />
        </div>
        </div>
    )

}