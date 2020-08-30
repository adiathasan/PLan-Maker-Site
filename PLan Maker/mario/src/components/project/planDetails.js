import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

function PlanDetail(props) {
    const {plan, auth} = props
    if (!auth.uid) return <Redirect to='/login' />
    if (plan){
        return (
            <div className='container m-5 mx-auto'>
                <div className="card text-left p-4 shadow">
                    <div className="card-header">
                        <h4>
                            {plan.title}
                        </h4>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                        {
                            plan.content
                        }
                    </p>
                    </div>
                    <div className="card-body border-top">
                        <p className='text-muted'>Posted by  <span className='text-info'> {plan.authFirstName} {plan.authLastName}</span></p>
                        <p className='text-muted'>{moment(plan.createdAt.toDate()).calendar()}
                        </p>
                    </div>
                </div>
            </div>
        ) 

    }else{
        return (
            <div className='container m-5 mx-auto'>
                <div className="card text-left p-4 ">
                    <div className="card-body">
                        <h4 className="card-title">
                        Loading....
                    </h4>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const plans = state.firestore.data.plans
    const plan = plans ? plans[id] : null
    return {
        plan,
        auth: state.firebase.auth, 
        profile: state.firebase.profile 
    }
} 

export default compose(
    firestoreConnect(() => ['plans']),
    connect(mapStateToProps),

)(PlanDetail)
