import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOutAction } from '../../actions/authAction'
import { connect }  from 'react-redux'

const SignedInBar = (props) => {
    const handleLogout = (e) =>{
        props.signOutFunc()
    }
    const {initials} = props
    return (
            <ul className=" d-flex nav">
                <li className="nav-item">
                <NavLink className="nav-link text-light" to="/createPlan">Make Plane</NavLink>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" onClick={handleLogout}>Logout </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light bg-danger rounded-pill d-inline-block " >
                    {initials ? initials : <span className='text-danger'>A</span> }</a>
                </li>
            </ul> 

    )
}

const mapDispatchToProps = dispatch =>{
    return{
        signOutFunc: ()=> {
            dispatch(signOutAction())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInBar)
