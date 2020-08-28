import React, { Component } from 'react';
import Notifications from './notifications'
import PLanList from '../project/projectList'

class DashBoard extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1 col-12 p-4">
                        <PLanList />
                    </div>
                    <div className="col-md-6 order-1 order-md-2 col-12 p-4">
                        <Notifications />
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default DashBoard