import React, { Component } from 'react'
import {planCreater} from '../../actions/planActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
export class CreatePlan extends Component {

    state = {
        title: '',
        content: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.createPlan(this.state)
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const {auth} = this.props
        if (!auth.uid) return <Redirect to='/login'/>
        return (
            <div className='container-fluid container-md mt-5'>
                <h3 className='text-center border-bottom mb-5'>Add Your Plan</h3>
                <div className="row">
                    <div className="col-11 col-md-8 mx-auto bg-light p-3  rounded shadow">
                        <form className='p-4' onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">title</label>
                                <input onChange={this.handleChange} type="text" className="form-control" id='title' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">content</label>
                                <textarea onChange={this.handleChange} type="text" className="form-control" id='content' required/>
                            </div>
                            <button className='btn btn-outline-dark'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        createPlan: (plan) => dispatch(planCreater(plan)),
            

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlan) 
