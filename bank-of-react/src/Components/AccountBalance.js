import '../Styles/AccountBalance.css';
import React, { Component } from 'react';

export default function AccountBalance (props) {

    return (
        <div>
            Balance: {props.accountBalance}
        </div>
    )
    
}