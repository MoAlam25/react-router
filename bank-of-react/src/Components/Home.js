import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

export default function Home (props) {

    return (
        <div>
            <img src="https://i1.wp.com/fintechranking.com/wp-content/uploads/2016/03/fintech-01.png?fit=2613%2C1503&ssl=1" alt="bank" width="25%"/>
            <h1>Bank of React</h1>

            <AccountBalance accountBalance={props.accountBalance}/>
        </div>
    )
    
}