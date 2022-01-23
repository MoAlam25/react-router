import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../Styles/Credits.css'

export default function Credits(props) {
    //helps to add new credits specified through the form
    const [updatedCredit, setUpdatedCredit] = useState({
        description: '',
        amount: 0,
        date: new Date().toLocaleString()
    })

    const handleChange = (event) => {
        const inputField = event.target.name
        const inputValue = event.target.value
        setUpdatedCredit(prevUpdatedCredit => ({ ...updatedCredit, [inputField]: inputValue }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateCredit(previousCredit => ([
            ...previousCredit,
            updatedCredit
        ])
        )
    }

    return (
        <div>
            <Navbar />
            <header>Credits</header>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    {props.credit && props.credit.map((creditEl) => {
                        return (
                            <tr key={creditEl.id} className="credits">
                                <td>{creditEl.description}</td>
                                <td>{creditEl.amount}</td>
                                <td>{creditEl.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <form onSubmit={handleSubmit} className='credit-form'>
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