import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const SignedOutBar = () => {
    return (

        <ul className=" d-flex nav align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link text-light" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to="/signup">Signup</NavLink>
            </li>
        </ul>

    )
}

export default SignedOutBar
