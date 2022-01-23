import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function Credits() {
    const [credit, setCredit] = useState(null)

    let apiURL = ("https://moj-api.herokuapp.com/credits")

    useEffect(() => {
        const fetchCredit = async () => {
            try {
                const response = await axios.get(apiURL)
                setCredit(response.data)
                console.log(response.data)
            } catch (e) {
                alert("ERROR")
                console.log(e)
            }
        }
        fetchCredit()
    }, [credit])

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
        setCredit(
            ...credit, 
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
                    {credit && credit.map((creditEl) => {
                        return (
                            <tr key={creditEl.id} className="credits">
                                <td>{creditEl.description}</td>
                                <td>{creditEl.amount}</td>
                                <td>{creditEl.date}</td>
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