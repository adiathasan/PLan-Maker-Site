const initState = {
    plans: [
        {id:1, title:'make the shit', content:'hululululu lkpas acnasd asdas casdjp'},
        {id:2, title:'cock the shit', content:'hujlulululu hujkhjhjkhjk acnasd asdas casdjp'},
        {id:3, title:'cum the meet', content:'hulusaedrfsdfs acnasd asdas casdjp'}
    ]
}


const planReducer = (state=initState, action) =>{
    switch(action.type){
        case 'CREATE_PLAN':
            console.log(state)
            return state
        case 'CREATE_PLAN_ERROR':
            console.log(action.type, action.err)
        default:
            return state
    }
}


export default planReducer