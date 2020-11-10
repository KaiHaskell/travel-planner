import React, { useState } from 'react'
import axios from "axios"

const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
}

const Login = props => {
    const [login, setLogin] = useState(initialState)

    const userHandleChange = e => {
        setLogin({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        
    )
}

