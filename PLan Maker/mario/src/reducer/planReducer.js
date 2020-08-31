const initState = {
    plans: [
       
    ]
}


const planReducer = (state=initState, action) =>{
    switch(action.type){
        case 'CREATE_PLAN':
            return state
        case 'CREATE_PLAN_ERROR':
            console.log(action.type, action.err)
        case 'PLAN_DELETE_ERROR':
            console.log(action.type, action.err)
        case 'PLAN_DELETED':
            console.log(action.type)
        default:
            return state
    }
}


export default planReducer