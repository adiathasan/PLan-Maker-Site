import React from 'react';

const PLanSummary = ({plans}) => {
        return (
        <div>          
            <div className='card mb-2'>
                <div className="card-header">
                    <h6 className='text-center'>{plans.title}</h6>
                </div>
                <div className="card-body">
                    <p>
                        created by admin shit
                    </p>
                    <p className='text-muted'>
                        3rd sep 2020
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PLanSummary