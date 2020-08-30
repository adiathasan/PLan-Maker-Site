import { Redirect } from "react-router-dom"

const initState = {
    authErr: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_FAILED':
            return {
                ...state,
                authErr: action.err.message
            }
        case 'LOGIN_SUCCESSFUL':
            return {
                ...state,
                authErr: null
            }
        case 'LOGED_OUT_USER':
            console.log(action.type) 
        case 'SIGNED_UP_USER':
            console.log(action.type) 
            return {
                ...state,
                authErr: null
            }
        case 'SIGNED_UP_USER_FAIL':
            return {
                ...state,
                authErr: action.err.message
            }
        default:
            return state
    }
    
}

export default authReducer