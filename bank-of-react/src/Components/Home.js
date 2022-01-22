import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

export default function Home(props) {

    return (
        <div>
            <img src="https://i1.wp.com/fintechranking.com/wp-content/uploads/2016/03/fintech-01.png?fit=2613%2C1503&ssl=1" alt="bank" width="25%" />
            <h1>Bank of React</h1>

            {/* Link component takes a very simple prop to= that tells us where we want to redirect */}
            <Link to="/userProfile">User Profile</Link>
            <br />
            <Link to="/login">Login</Link>

            <AccountBalance accountBalance={props.accountBalance} />
        </div>
    )

}