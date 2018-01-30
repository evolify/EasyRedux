import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import {reducer as reducer1} from './module/page1/redux'
import {reducer as reducer2} from './module/page2/redux'
import {evStore} from 'ev-redux'
import Main from './module/main/Main'
 
const reducer = combineReducers({
    reducer1,reducer2
})

let store = createStore(reducer)
evStore.init(store)

render(
    <Provider store={ store }>
        <Main/>
    </Provider>,
    document.getElementById('app')
)