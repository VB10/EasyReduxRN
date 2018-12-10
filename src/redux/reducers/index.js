import { combineReducers } from 'redux'

import datasReducer from './dataReducer'
import selectDataReducer from './selectDataReducer'
export default combineReducers({
    datas: datasReducer,
    dataSelection : selectDataReducer
})