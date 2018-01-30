import {ActionType as TYPE} from './index.js'
const initState={
    a:'',
    b:0,
    c:''
}
export default function(state=initState,action){
    if(action.type === TYPE){
        return {
            ...state,
            ...action.data
        }
    }
    return state
}