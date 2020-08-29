import React, { Component } from 'react';
import Notifications from './notifications'
import PLanList from '../project/projectList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class DashBoard extends Component{

    render(props){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1 col-12 p-4">
                        <PLanList plans={this.props.plans}/>
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
        plans: state.firestore.ordered.plans
    }
}


export default compose(
    firestoreConnect(() => ['plans']),
    connect(mapStateToProps)
)(DashBoard)