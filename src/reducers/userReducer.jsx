const initialState = {
    email:''
}
export default (state = initialState, action) => {
    if(action.type === 'SET_EMAIL' ){
        return{...state, emal:action.payload.email}
    }
    return state;
}