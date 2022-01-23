import '../Styles/App.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance'
import Navbar from './Navbar'

export default function Home(props) {

    return (
        <div>
            <Navbar />
            <AccountBalance accountBalance={props.accountBalance} />
        </div>

    )

}