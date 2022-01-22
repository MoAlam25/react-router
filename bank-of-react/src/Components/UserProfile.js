import '../Styles/UserProfile.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function UserProfile(props) {
    return (
        <div>
          <Navbar/>

          <h1>User Profile</h1>

          <Link to="/">Home</Link>

          <div>Username: {props.username}</div>
          <div>Member Since: {props.memberSince}</div>

        </div>
    )
}