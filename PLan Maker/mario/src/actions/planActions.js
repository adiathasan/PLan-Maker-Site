export const createPlan = (plan) =>{
    return (dispatch, getState)=>{
        dispatch({type: 'CREATE_PLAN', plan})
    }
}   