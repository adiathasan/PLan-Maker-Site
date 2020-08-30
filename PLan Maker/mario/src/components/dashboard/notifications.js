import React from 'react';


const Notifications = ()=>{
    return (
        <div className=' card shadow'>
            <div className="card-header">
                <h5>
                    Notifications
                </h5>
            </div>
            <div className="card-body border-bottom ">
                <h6>New signed in user Net Ninja</h6>
                <p className='text-muted'>2 hours ago</p>
            </div>
            <div className="card-body border-bottom">
                <h6>New Planed made</h6>
                <p className='text-muted'>12 hours ago</p>
            </div>
        </div>
    )
}

export default Notifications