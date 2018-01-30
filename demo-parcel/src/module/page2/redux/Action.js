import {evRedux} from 'ev-redux'

@evRedux
export default class Action{

    constructor(actionType){
        this.actionType = actionType
    }

    changeX(x){
        this.update({
            x
        })
    }
    changeY(){
        this.dispatch({
            type:this.actionType,
            data:{y:this.getState().reducer2.y+1}
        })
        // or just update
        // this.update({y:this.getState().reducer2.y+1})
    }
    changeZ(z){
        setTimeout(()=>{
            this.update({z})
        },1000)
    }
}