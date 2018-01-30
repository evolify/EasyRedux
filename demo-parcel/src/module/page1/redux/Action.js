import {evRedux} from 'ev-redux'

@evRedux
export default class Action{

    constructor(actionType){
        this.actionType = actionType
    }

    changeA(a){
        this.update({
            a
        })
    }
    changeB(){
        console.log(this)
        this.dispatch({
            type:this.actionType,
            data:{b:this.getState().reducer1.b+1}
        })
        // or just update
        // this.update({b:this.getState().reducer1.b+1})
    }
    changeC(c){
        setTimeout(()=>{
            this.update({c})
        },1000)
    }
}