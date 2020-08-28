import React from 'react'

function PlanDetail(props) {
    console.log(props)
    const pro = props.match.params.id
    return (
        <div className='container m-5 mx-auto'>
            <div class="card text-left p-4 ">
                <div class="card-body">
                <h4 class="card-title">
                    Title for plan -{pro}
                </h4>
                <p class="card-text">
                    Lorem ipsum, dolor sit amet consecteae odio ipsa deleniti. Laborum cum numquam sapiente!
                </p>
                </div>
                <div className="card-body border-top">
                    <p className='text-muted'>Posted by PLauting</p>
                    <p className='text-muted'>Posted on jan 2nd, 2020 10 Pm</p>
                    
                </div>
            </div>
        </div>
    )
}

export default PlanDetail
