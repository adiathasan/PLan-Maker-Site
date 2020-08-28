import React from 'react';
import PLanSummary from './projectSummary';

const PLanList = ({plans}) =>{

    return(
       <div>
           
            { 

                plans && plans.map(element => {
                    return <PLanSummary plans={element} key={plans.id}/>

                })

            }
       </div>
    )
}

export default PLanList