import React from 'react';
import moment from 'moment'

const Notifications = (props)=>{
    const { notifications } = props 

    return (
        <div className=' card shadow'>
            <div className="card-header bg-info text-light">
                <h5>
                    Notifications
                </h5>
            </div>
            {
                notifications ? notifications.map(notification=>{           
            return  <div className="card-body border-bottom " key={notification.id}>
                <h6>
                    <span className='text-danger'>{notification.user}  </span> 
                    <span className='text-info ml-3'>{notification.content}</span>
                </h6>
                        <p className='text-muted'>{moment(notification.time.toDate()).fromNow()}</p>
                    </div>
                }) : (
                    <div className="card-body border-bottom ">
                        <h3 className='text-center text-info'>Loading...</h3>
                    </div>
                )
            }
        </div>
    )
}

export default Notifications