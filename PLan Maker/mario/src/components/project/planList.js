import React from 'react';
import PLanSummary from './planSummary';

const PLanList = ({ plans, profile}) =>{
    return(
       <div>
           
            { 

                plans && plans.map(element => {
                    return <PLanSummary plans={element} key={plans.id} profile={profile}/>

                })

            }
       </div>
    )
}

export default PLanList