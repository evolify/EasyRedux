import React from 'react'
import {render} from 'react-dom'
import {action,connect} from './redux'

@connect
export default class View extends React.Component{

    render(){
        return(
            <div>
                <h3>Comp1</h3>
                <div className="input">
                    <p><input type="text" onChange={e=>action.changeA(e.target.value)}/></p>
                    <button onClick={()=>action.changeB()}>increase b</button>
                    <p>
                        <input type="text" ref={inputC=>this.inputC = inputC}/>
                        <button onClick={()=>action.changeC(this.inputC.value)}>set c 1000ms later</button>
                    </p>
                </div>
                <div className="output">
                    <p>a:{this.props.a}</p>
                    <p>b:{this.props.b}</p>
                    <p>c:{this.props.c}</p>
                </div>
            </div>
        )
    }
}
