import {ActionType as TYPE} from './index.js'
const initState={
    x:'',
    y:0,
    z:''
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