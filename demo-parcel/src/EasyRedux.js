export const easyRedux = target => (...arg) => {
    let obj = new target(...arg)
    return new Proxy(obj, handler)
}
export const handler = {
    get(target, prop, proxy) {
        if(!Reflect.get(target,'dispatch') || !Reflect.get(target,'getState')){
            const {dispatch,getState}=easyStore
            if(dispatch && getState){
                Reflect.set(target,'dispatch',dispatch)
                Reflect.set(target,'getState',getState)
                Reflect.set(target,'update',(data,type)=>dispatch({
                        type: type || target.actionType,
                        data
                    }))
            }else{
                console.error('You may forgot to init the easyStore')
            }
        }
        return Reflect.get(target, prop) || (()=>{
                console.error(`function ${prop} isn't exist in this action`)
            })
    }
}
export const easyStore = {
    dispatch:null,
    getState:null,
    init:store=>{
        easyStore.dispatch=store.dispatch,
        easyStore.getState=store.getState
    }
}