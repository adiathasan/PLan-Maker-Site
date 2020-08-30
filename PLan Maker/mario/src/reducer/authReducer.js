const initState = {
    authErr: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_FAILED':
            return {
                ...state,
                authErr: 'Invalid Email Or Password'
            }
        case 'LOGIN_SUCCESSFUL':
            return {
                ...state,
                authErr: null
            }
        case 'LOGED_OUT_USER':
            console.log(action.type) 
        default:
            return state
    }
    
}

export default authReducer