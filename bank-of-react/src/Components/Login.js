import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'

export default function Login (props){
    const [user, setUser] = useState ( 
        {
            username: "",
            password: ""
        }
    )
    const [redirect, setRedirect] = useState (false)

    const handleChange = (event) => {
        const updatedUser = {...user}
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedUser[inputField] = inputValue
        setUser(updatedUser)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.mockLogin(user)
        setRedirect(true)
        console.log(user.password);
    }

    if (redirect) {
        return(<Navigate to="/userProfile"/>)
    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <div>
                    <label htmlFor="username"> User Name </label>
                    <input type="text" name ="username" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div>
                <button> Log In </button>
            </form>
        </div>
    )
}