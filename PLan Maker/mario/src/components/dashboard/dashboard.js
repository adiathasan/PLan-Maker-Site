import React, { Component } from 'react';
import Notifications from './notifications'
import PLanList from '../project/planList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom';

class DashBoard extends Component{
    
    render(){
        const { plans, auth, profile } = this.props
        if (!auth.uid) return <Redirect to='/login'/>
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1 col-12 p-4">
                        <PLanList plans={plans} profile={profile}/>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 col-12 p-4">
                        <Notifications />
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
    }
}


export default compose(
    firestoreConnect(() => ['plans']),
    connect(mapStateToProps)
)(DashBoard)