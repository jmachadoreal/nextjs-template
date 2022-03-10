import { combineReducers } from 'redux'

import exampleReducer from './example'

const reducers = combineReducers({
  example: exampleReducer
})

export default reducers
