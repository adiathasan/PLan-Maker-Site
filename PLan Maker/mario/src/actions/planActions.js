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

export const planDeleter = id =>{

    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('plans').doc(id).delete()
        .then(()=>{
            dispatch({type: 'PLAN_DELETED'})
        }).catch(err =>{
            dispatch({type: 'PLAN_DELETE_ERROR', err})
        })
    }

}