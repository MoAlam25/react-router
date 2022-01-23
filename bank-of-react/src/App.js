import './Styles/App.css'
import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import UserProfile from './Components/UserProfile'
import Login from './Components/Login'
import Debits from './Components/Debits'
import Credits from './Components/Credits'
import axios from 'axios'

export default function App() {
  const [route, setRoute] = useState(null)
  const [balance, setBalance] = useState(0)
  const [credit, setCredit] = useState([])
  const [debit, setDebit] = useState([])
  const [creditAmount, setCreditAmount] = useState(0)
  const [debitAmount, setDebitAmount] = useState(0)

  const [currentUser, setCurrentUser] = useState({
    username: "bob_loblaw",
    memberSince: "08/23/99"
  })

  useEffect(() => {
    fetchCredit()
    fetchDebit()
  },[])

  useEffect(() => {
    let num = 0;
    credit.map((creditEl) => {
      return num += parseFloat(creditEl.amount)
    })
    setCreditAmount(num);

    num = 0;
    debit.map((debitEl) => {
      return num += parseFloat(debitEl.amount)
    })
    setDebitAmount(num);
  }, [credit, debit])

  useEffect(() => {
    setBalance(Math.ceil((creditAmount - debitAmount) * 100 ) / 100);
  }, [creditAmount, debitAmount])

  const fetchCredit = async () => {
    try {
      const response = await axios.get("https://moj-api.herokuapp.com/credits")
      setCredit(response.data)
    } catch (e) {
      alert("ERROR")
      console.log(e)
    }
  }

  const fetchDebit = async () => {
    try {
      const response = await axios.get("https://moj-api.herokuapp.com/debits")
      setDebit(response.data)
    } catch (e) {
      alert("ERROR")
      console.log(e)
    }
  }

  const mockLogin = (loginInfo) => {
    const newUser = { ...currentUser }
    newUser.username = loginInfo.username
    setCurrentUser(newUser)
  }

  const updateDebit = (debit) => {
    setDebit(debit)
  }

  const updateCredit = (credit) => {
    setCredit(credit)
  }

  return (
    <div>
      <nav className="app--nav">
        <Router>
          {/* we will wrap our code in a <Routes> component to make sure we only show the results of one route at a time */}
          <Routes className="routes">
            <Route exact path="/" element={<Home accountBalance={balance} />} />
            <Route exact path="/userProfile" element={<UserProfile username={currentUser.username} memberSince={currentUser.memberSince}/>} />
            <Route exact path="/login" element={<Login user={currentUser} mockLogin={mockLogin}/>} />
            <Route exact path="/debits" element={<Debits debit={debit} updateDebit={updateDebit} balance={balance}/>} />
            <Route exact path="/credits" element={<Credits credit={credit} updateCredit={updateCredit} balance={balance}/>} />
          </Routes>
        </Router>
      </nav>
      {/* <button onClick={() => setBalance(balance + 1)}>Increment Balance</button> */}
    </div>
  )

}