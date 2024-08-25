const signpuReducer=(state,action)=>{
    switch(action.type){
        case "SET_VALUE":
            return{...state,[action.payload.name]:action.payload.value}
        default:
            return state
    }
}
export {signpuReducer}