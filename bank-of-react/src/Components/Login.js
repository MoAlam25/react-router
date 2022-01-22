import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Login(props) {
    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        }
    )
    const [redirect, setRedirect] = useState(false)

    const handleChange = (event) => {
        const updatedUser = { ...user }
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedUser[inputField] = inputValue

        setUser({ user: updatedUser })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.mockLogin(user)
        setRedirect({redirect: true})
        console.log(redirect)
    }

    if (redirect) {
        return (<Navigate to="/userProfile" />)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="username"> User Name </label>
                    <input type="text" name="username" onChange={handleChange} value={user.username}/>
                </div>
                <div>
                    <label for="password"> Password </label>
                    {/* onChange={handleChange} */}
                    <input type="password" name="password" /> 
                </div>
                <button> Log In </button>
            </form>
        </div>
    )
}