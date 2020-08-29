import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


function PlanDetail(props) {
    console.log(props.plan)
    const {plan} = props
    if (plan){
        return (
            <div className='container m-5 mx-auto'>
                <div className="card text-left p-4 ">
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
                        <p className='text-muted'>Posted by  <span className='text-dark'>{plan.authFirstName} {plan.authLastName}</span></p>
                        {/* <p className='text-muted'>Posted on {plan.createdAt}
                        </p> */}
                    </div>
                </div>
            </div>
        )

    }else{
        return (
            <div className='container m-5 mx-auto'>
                <div class="card text-left p-4 ">
                    <div class="card-body">
                    <h4 class="card-title">
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
        plan
    }
} 

export default compose(
    firestoreConnect(() => ['plans']),
    connect(mapStateToProps),

)(PlanDetail)
