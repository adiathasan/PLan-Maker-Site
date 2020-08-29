export const planCreater = (plan)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        // ajax here from DB
        const firestore = getFirestore()
        firestore.collection('plans').add({
            ...plan,
            authFirstName: 'adi',
            authLastName: 'kola vari di',
            authId: 1134,
            createdAt: new Date() 
        }).then(()=>{
            dispatch({type:'CREATE_PLAN', plan})
        }).catch((err)=>{
            dispatch({type:'CREATE_PLAN_ERROR', err})
        })
    }
}