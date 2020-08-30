const initState = {
    authErr: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_FAILED':
            console.log(action)
            return {
                ...state,
                authErr: 'Invalid Email Or Password'
            }
        case 'LOGIN_SUCCESSFUL':
            console.log(action) 
            return {
                ...state,
                authErr: null
            }
        default:
            return state
    }
    
}

export default authReducer