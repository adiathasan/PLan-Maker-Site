import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'

const PLanSummary = ({ plans, profile}) => {
        return (
        <div key={plans.id}>          
            <div className='card mb-2 shadow'>
                <div className="card-header">
                    <h6 className=''>{plans.title}</h6>
                </div>
                <div className="card-body">
                    <Link to={`/plan/${plans.id}`} className=' nav-link text-dark'>
                    
                        <p>
                                created by 
                                <span className='ml-1 text-info'>
                                    {plans.authFirstName}
                                    { plans.authLastName }
                                </span>
                                    
                        </p>
                        <p className='text-muted'>
                                {moment(plans.createdAt.toDate()).calendar()}
                        </p>
                    
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PLanSummary