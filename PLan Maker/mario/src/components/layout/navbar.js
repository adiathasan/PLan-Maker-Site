import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import SignedInBar  from './signedInLink'
import SignedOutBar  from './signedOutLink'
import {connect}  from 'react-redux'


const Nav = (props) =>{
    const {auth} = props
    console.log(auth)
    const links = auth.uid ? <SignedInBar /> : <SignedOutBar />
    return(
        <ul className="nav sticky-top container-fluid bg-dark shadow-sm nav-pills nav-fill">
            <li className='nav-link'>
                <ul className='nav'>
                    <li className="nav-item">
                        <NavLink exact className="nav-link " to="/"> 
                            <h5 className=' text-light'>Plan Maker</h5>
                        </NavLink>
                    </li>
                </ul>
            </li>

            <li className='nav-link text-light'>
                {auth.isLoaded && links}
            </li>
                     
        </ul> 
  

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Nav)

