import React from 'react'
import {render} from 'react-dom'
import Page1 from '../page1/Page'
import Page2 from '../page2/Page'
export default class View extends React.Component{

    render(){
        return(
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <Page1/>
                <Page2/>
            </div>
        )
    }
}
