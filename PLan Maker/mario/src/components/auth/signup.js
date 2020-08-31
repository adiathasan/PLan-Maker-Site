import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signUpAction} from '../../actions/authAction'


export class SignUp extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { password, confirm } = this.state
        if(password === confirm){
            this.props.signUpFunc(this.state)
        }else{
            alert('passwords are not matching')
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {

        const { auth, authLite } = this.props

        if (auth.uid) return <Redirect to='/' />

        return (
            auth.isLoaded  &&
                (<div className='container mt-4'>
                    <h3 className='text-center border-bottom text-dark mb-4 p-2'>Sign Up</h3>
                    <div className="row">
                        <div className="col-11 col-md-8 mx-auto bg-light p-3  rounded shadow">
                            <form className='p-4' onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstname">First
                                    Name</label>
                                    <input onChange={this.handleChange} type="text" className="form-control" id='firstname' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input onChange={this.handleChange} type="text" className="form-control" id='lastname' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">email</label>
                                    <input onChange={this.handleChange} type="email" className="form-control" id='email' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={this.handleChange} type="password" className="form-control" id='password' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm">Confirm Password</label>
                                    <input onChange={this.handleChange} type="password" className="form-control" id='confirm' required />
                                </div>
                                {authLite ? (
                                    <div className="alert alert-danger">
                                        <p className="text-center">
                                            {authLite}
                                        </p>
                                    </div>
                                ) : null}
                                <button className='btn btn-outline-dark'>Submit</button>
                            </form>
                            
                        </div>
                    </div>
                </div>)
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authLite: state.auth.authErr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpFunc: (cred) => dispatch(signUpAction(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
