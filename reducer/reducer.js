import { ACTIVE_DARK } from "./actionTypes";

const initialState = {
    dark : 1,
}

export const reducer = ( state = initialState, action)=>{
    switch(action.type){
        case ACTIVE_DARK:
            return{
                ...state,
                dark: state.dark + 1
            }
            default:
                return state
    }
}