import { combineReducers } from 'redux'

import { reducer as recordReducer } from './recordsstore'

const cReducer = combineReducers({
    record: recordReducer

})
export default cReducer