import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default function UserProfile(props) {
    return (
        <div>
          <h1>User Profile</h1>

          <Link to="/">Home</Link>

          <div>Username: {props.username}</div>
          <div>Member Since: {props.memberSince}</div>

        </div>
    )
}