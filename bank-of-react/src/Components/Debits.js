import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../Styles/Debits.css'

export default function Debits() {
    const [debit, setDebit] = useState(null)

    let apiURL = ("https://moj-api.herokuapp.com/debits")

    useEffect(() => {
        const fetchDebit = async () => {
            try {
                const response = await axios.get(apiURL)
                setDebit(response.data)
                console.log(response.data)
            } catch (e) {
                alert("ERROR")
                console.log(e)
            }
        }
        fetchDebit()
    }, [debit])

    // const handleChange = (name) => {
    //     const enteredCityName = name.target.value
    //     setName(enteredCityName)
    // }

    const handleChange = (event) => {
        const Date = new Date().toLocaleString()
        const inputField = event.target[0].name;
        const inputValue = event.target[1].value;
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        setDebit(
            ...debit, 
            {
                description: event.target.value,
                amount: event.target.value,
                date: Date
            }
        )
    }

    return (
        <div>
            <Navbar />
            {/* <div className="column-names">
                <h1>Description</h1>
                <h1>Amount</h1>
                <h1>Date</h1>
            </div> */}
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    {debit && debit.map((debitEl) => {
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

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description"> Description </label>
                    <input placeholder='Enter Description' onChange={handleChange} name="description" required/>
                </div>
                <div>
                    <label htmlFor="amount"> Amount </label>
                    <input placeholder='Enter Amount' onChange={handleChange} name="amount"required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}