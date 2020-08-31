import React, { Component } from 'react';
import Notifications from './notifications'
import PLanList from '../project/planList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom';

class DashBoard extends Component{
    
    render(){
        const { plans, auth, profile, notifications } = this.props
        if (!auth.uid) return <Redirect to='/login'/>
        return(
            <div className="container-fluid container-md">
                <div className="row">
                    <div className="col-md-7 order-2 order-md-1 col-12 py-4 px-md-4">
                        <PLanList plans={plans} profile={profile}/>
                    </div>
                    <div className="col-md-5 order-1 order-md-2 col-12 py-4 px-md-4">
                        <Notifications notifications={notifications} />
                    </div>
                    
                </div>
            </div>
        ) 
    }

}

const mapStateToProps = state =>{
    return {
        plans: state.firestore.ordered.plans,
        auth: state.firebase.auth, 
        profile: state.firebase.profile, 
        notifications: state.firestore.ordered.notifications
    }
}


export default compose(
    // firestoreConnect(() => ['plans']),
    firestoreConnect([
        { collection: 'notifications', limit:3, orderBy:['time', 'desc']},
        { collection: 'plans', orderBy: ['createdAt', 'desc']},
    ]),
    connect(mapStateToProps)
)(DashBoard)