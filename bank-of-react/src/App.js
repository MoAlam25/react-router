import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Components/Home';

export default function App() {
  const [route, setRoute] = useState(null)
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    onchange = () => {
    setBalance(balance = 14568.27)
    }
  }, [balance]);

  return (
    <div>
      <Router>
        {/* we will wrap our code in a <Routes> component to make sure we only show the results of one route at a time */}
        <Routes>
          <Route exact path="/" element={<Home accountBalance={balance} />} />
        </Routes>
      </Router>
    <button onClick={() => setBalance(balance + 1)}>Increment Balance</button>
    </div>
  )

}