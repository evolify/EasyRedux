import Action from './Action'
import reducer from './reducer'
import {connect as conn} from 'react-redux'

const connect = view => conn(state=>state.reducer1)(view)
const ActionType = Symbol()
const action = new Action(ActionType)

export {reducer,ActionType,action,connect}