export const signInAction = (ema_pass) =>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
                ema_pass.email,
                ema_pass.password,
            ).then(()=>{
                dispatch({
                    type: 'LOGIN_SUCCESSFUL'
                })
            }).catch(err =>{
                dispatch({
                    type: 'LOGIN_FAILED',
                    err
                })
            })
    }
}


export const signOutAction = () =>{
    return (dispatch, getState, { getFirebase })=>{
        const firebase = getFirebase()
        firebase.auth().signOut()
        .then(()=>{
            dispatch({
                type: 'LOGED_OUT_USER',
            })
        })
    }
}