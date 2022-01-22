import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import {Link} from 'react-router-dom';

export default function UserProfile(props) {
    return (
        <div>
          <img src="https://i1.wp.com/fintechranking.com/wp-content/uploads/2016/03/fintech-01.png?fit=2613%2C1503&ssl=1" alt="bank" width="25%" />

          <h1>User Profile</h1>

          <Link to="/Home">Home</Link>
          <Link to="/login">Login</Link>

          <div>Username: {props.username}</div>
          <div>Member Since: {props.memberSince}</div>
        </div>
    )
}