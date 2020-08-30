import React from 'react';
import { Link } from 'react-router-dom'

const PLanSummary = ({plans}) => {
        return (
        <div key={plans.id}>          
            <div className='card mb-2 shadow'>
                <div className="card-header">
                    <h6 className=''>{plans.title}</h6>
                </div>
                <div className="card-body">
                    <Link to={`/plan/${plans.id}`} className=' nav-link text-dark'>
                    
                        <p>
                            created by {plans.authFirstName}
                        </p>
                        <p className='text-muted'>
                            3rd sep 2020
                        </p>
                    
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PLanSummary