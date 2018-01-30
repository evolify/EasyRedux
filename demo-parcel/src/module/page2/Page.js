import React from 'react'
import {render} from 'react-dom'
import {action,connect} from './redux'

@connect
export default class View extends React.Component{

    render(){
        return(
            <div>
                <h3>Comp2</h3>
                <div className="input">
                    <p><input type="text" onChange={e=>action.changeX(e.target.value)}/></p>
                    <button onClick={()=>action.changeY()}>increase y</button>
                    <p>
                        <input type="text" ref={inputZ=>this.inputZ = inputZ}/>
                        <button onClick={()=>action.changeZ(this.inputZ.value)}>set z 1000ms later</button>
                    </p>
                </div>
                <div className="output">
                    <p>x:{this.props.x}</p>
                    <p>y:{this.props.y}</p>
                    <p>z:{this.props.z}</p>
                </div>
            </div>
        )
    }
}
