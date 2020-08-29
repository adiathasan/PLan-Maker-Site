import React, { Component } from 'react'
import {planCreater} from '../../actions/planActions'
import {connect} from 'react-redux'
export class CreatePlan extends Component {

    state = {
        title: '',
        content: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.createPlan(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                <h3 className='text-center border-bottom mb-5'>Add Your Plan</h3>
                <div className="row">
                    <div className="col-8 mx-auto bg-light p-3  rounded shadow">
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

const mapDispatchToProp = (dispatch)=>{
    return {
        createPlan: (plan) => dispatch(planCreater(plan))
            

    }
}

export default connect(null, mapDispatchToProp)(CreatePlan) 
