import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { planDeleter } from '../../actions/planActions'

function PlanDetail(props) {
    const handleDelete = e => {
        props.planDeleteFunc(id)
        props.history.push('/')
    }
    const {plan, auth, id} = props
    if (!auth.uid) return <Redirect to='/login' />
    const btn = auth.uid == plan.authId ? 
        (<button className=' btn btn-danger' onClick={handleDelete}>Delete plan</button>) : null

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
                        {
                            btn
                        }
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
        profile: state.firebase.profile, 
        id,
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        planDeleteFunc: id => dispatch(planDeleter(id))
    }
}

export default compose(
    firestoreConnect(() => ['plans']),
    connect(mapStateToProps, mapDispatchToProps),

)(PlanDetail)
