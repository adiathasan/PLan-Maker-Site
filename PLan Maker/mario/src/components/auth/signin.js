import React, { Component } from 'react'
import { signInAction } from '../../actions/authAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


export class SignIn extends Component {

    state = {
        email:'',
        password:'',
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.signInFunc(this.state)
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render() {
        const { err, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            auth.isLoaded &&  (<div className='container mt-5'>
                <h3 className='text-center border-bottom mb-5'>Sign In</h3>
                <div className="row">
                    <div className="col-11 col-md-8 mx-auto bg-light p-3  rounded shadow">
                        {
                            err ? (
                                <div className="alert alert-danger">
                                    <p className='text-center'>
                                        {err}
                                    </p>
                                </div>
                            ) : null
                        }
                        <form className='p-4' onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input onChange={this.handleChange} type="email" className="form-control" id='email' required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input onChange={this.handleChange}type="password" className="form-control" id='password' required/>
                            </div>
                            <button className='btn btn-outline-dark'>Submit</button>
                        </form> 
                    </div>
                </div>            
            </div>)
        )
    }
}

const mapStateToProps = state =>{
    return {
        err: state.auth.authErr,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        signInFunc: email_pass => dispatch(signInAction(email_pass))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
