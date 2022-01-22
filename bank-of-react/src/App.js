import './Styles/App.css';
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import Login from './Components/Login'

export default function App() {
  const [route, setRoute] = useState(null)
  const [balance, setBalance] = useState(14568.27)

  const [currentUser, setCurrentUser] = useState({
    username: "bob_loblaw",
    memberSince: "08/23/99"
  })

  //   useEffect(() => {
  //     onchange = () => {
  //       setBalance(balance = 14568.27)
  //     }
  //   }, [balance]);

  const mockLogin = (loginInfo) => {
    const newUser = { ...currentUser }
    console.log("In app.js",loginInfo)
    newUser.username = loginInfo.user.username
    setCurrentUser(newUser)
  }

  return (
    <div>
      <nav className="nav">
        <Router>
          {/* we will wrap our code in a <Routes> component to make sure we only show the results of one route at a time */}
          <Routes className="routes">
            <Route exact path="/" element={<Home accountBalance={balance} />} />
            <Route exact path="/userProfile" element={<UserProfile username={currentUser.username} memberSince={currentUser.memberSince} />} />
            <Route exact path="/login" element={<Login user={currentUser} mockLogin={mockLogin} />} />
          </Routes>
        </Router>
      </nav>
      <button onClick={() => setBalance(balance + 1)}>Increment Balance</button>
    </div>
  )

}