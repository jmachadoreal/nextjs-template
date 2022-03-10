import initialState from './state'
import type { Action, State } from './types'

const exampleReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_EXAMPLE_DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return initialState
  }
}

export default exampleReducer
