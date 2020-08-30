export const planCreater = (plan)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        // ajax here from firebase
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authId = getState().firebase.auth.uid
        firestore.collection('plans').add({
            ...plan,
            authFirstName: profile.firstname,
            authLastName: profile.lastname,
            authId,
            createdAt: new Date() 
        }).then(()=>{
            dispatch({type:'CREATE_PLAN', plan})
        }).catch((err)=>{
            dispatch({type:'CREATE_PLAN_ERROR', err})
        })
    }
}