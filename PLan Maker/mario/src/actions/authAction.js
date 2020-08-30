import { Redirect } from "react-router-dom"

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


export const signUpAction = (newUser) =>{
    return (dispatch, getState, { getFirebase, getFirestore })=>{
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            return firestore.collection('users').doc(
                res.user.uid
            ).set({
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                initials: newUser.firstname[0].toUpperCase() + newUser.lastname[0].toUpperCase(),
                firstname: newUser.firstname,
            })
        }).then(()=>{
            dispatch({
                type: 'SIGNED_UP_USER'
            })
        }).catch((err)=>{
            dispatch({
                type: 'SIGNED_UP_USER_FAIL',
                err
            })
        })
    }
}