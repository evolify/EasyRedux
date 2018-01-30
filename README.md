# EvRedux
An easy way to use redux.

When we use Redux in React, usually we need a middleware to support async action,such as redux-thunk.

we have to write action and reducer like this:  

```jsx
//ActionType  R.js
export ActionType{
  	TYPE1:'type1',  
  	TYPE2:'type2',  
    TYPE3:'type3',  
    // others
}
    
//reducer reducer.js
import {ActionType as AT} from 'R'
export default function(state={},action){
  switch(action.type){
    case AT.TYPE1:
      	return {
          ...state,
          ...action.data,
          // or other
        }
    case AT.TYPE2:
          //...
    default:
    	return state      
  }      
}

//Action Action.js
import {ActionType as AT} from 'R'
const act = {
  action1:data=>dispatch=>{
    // some action such as ajax
    dispatch({
      type:AT.TYPE1,
      data:{
        // data
      }
    })
  }    
  action2:()=>(dispatch,getState)=>{
  	// call another action
  	dispatch(act.action3())
  }
  action3:()=>()=>{
    // even you never use the dispath or getState,you still have to code like this.
  }
}
export default act

// Component
@connect(
	state=>state.reducer1,
  	dispatch=>bindActionCreators(Action,dispatch)
)
export default class View extends React.Component{
    
    doAction1(){
      this.props.action1({})
    }
    
    render(){
      return(
      	<div>
          anything else
        </div>
      )
    }
}
```

Isn't is terible to code so many ActionType 、reduceer、dispatch and getState?

Now with EvRedux, things goes easy like this:

first install `ev-redux`:  

`npm i --save ev-redux`  

then you code like this:

```jsx
// init evStore in you app.js when create store.
import {evStore} from 'ev-redux'
const store = createStore(...)
evStore.init(store)

// redux/reducer.js
import {ActionType as TYPE} from './index.js'
const initState={}
export default function(state=initState,action){
    if(action.type === TYPE){
        return {
            ...state,
            ...action.data
        }
    }
    return state
}

// redux/Action.js
import {evRedux} from 'ev-redux'

@evRedux
export default class Action{
    constructor(actionType){
        this.actionType = actionType
    }
    action1(x){
        this.update({
            x
        })
    }
    action2(){
        this.dispatch({
            type:this.actionType,
            data:{y:this.getState().reducer2.y+1}
        })
      	// to call another action, just call no need dispath!
      	this.action3({z:3})
        // or just update
        // this.update({y:this.getState().reducer2.y+1})
    }
    action3(z){
        setTimeout(()=>{
            this.update({z})
        },1000)
    }
}

// redux/index.js
import Action from './Action'
import reducer from './reducer'
import {connect as conn} from 'react-redux'

const connect = view => conn(state=>state.reducer2)(view)
const ActionType = Symbol()
const action = new Action(ActionType)

export {reducer,ActionType,action,connect}

// Component
import action from './action'
@connect
export default class View extends React.Component{
    
    doAction1(){
      // just call an action as we call a function.
      action.action1()
    }
    
    render(){
      return(
      	<div>
          anything else
        </div>
      )
    }
}
```

Isn't it amazing? 

* No need middlerware for async action.
* No need to code so many actionTypes.
* No need so many reducer, and just construct the state in action.
* No need to code dispatch and getState manually, and just call action as we call an simple function.  

Couldn't wait to use it? just `npm i --save ev-redux`

### TODO

* Simplify the reducer.