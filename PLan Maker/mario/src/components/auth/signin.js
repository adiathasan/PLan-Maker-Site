import React, { Component } from 'react'

export class SignIn extends Component {

    state = {
        email:'',
        password:'',
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
        e.target.reset()
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                <h3 className='text-center border-bottom mb-5'>Sign In</h3>
                <div className="row">
                    <div className="col-8 mx-auto bg-light p-3  rounded shadow">
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
            </div>
        )
    }
}

export default SignIn
