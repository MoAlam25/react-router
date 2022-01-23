import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../Styles/Debits.css'

export default function Debits(props) {

    const [updatedDebit, setUpdatedDebit] = useState({
        description: '',
        amount: 0,
        date: new Date().toLocaleString()
    })

    const handleChange = (event) => {
        const inputField = event.target.name
        const inputValue = event.target.value
        setUpdatedDebit(prevUpdatedDebit => ({ ...updatedDebit, [inputField]: inputValue }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateDebit(previousDebit => ([
            ...previousDebit,
            updatedDebit
        ])
        )
    }

    return (
        <div>
            <Navbar />
            <header>Debits</header>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    {props.debit && props.debit.map(debitEl => {
                        return (
                            <tr key={debitEl.id} className="debits">
                                <td>{debitEl.description}</td>
                                <td>{debitEl.amount}</td>
                                <td>{debitEl.date}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

            <form onSubmit={handleSubmit} className='debit-form'>
                <div>
                    <label htmlFor="description">Description</label>
                    <input placeholder='Enter Description' onChange={handleChange} name="description" required />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input placeholder='Enter Amount' onChange={handleChange} name="amount" required />
                </div>
                <button type="submit">Submit</button>
            </form>

            <div>
                <h2>Account Balance:</h2>
                <p>{props.balance}</p>
            </div>
        </div>
    )
}