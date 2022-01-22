import '../Styles/Login.css';
import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router';

export default function Login(props) {
    let navigate = useNavigate();

    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        }
    )

    const handleChange = (event) => {
        const updatedUser = { ...user }
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedUser[inputField] = inputValue

        setUser({ user: updatedUser })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        // setUser({ user: updatedUser })
        props.mockLogin(user)
        // console.log(user)
        navigate('/userProfile')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" > User Name </label>
                    <input type="text" name="username" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" />
                </div>
                <button type="submit"> Log In </button>
            </form>
        </div>
    )
}