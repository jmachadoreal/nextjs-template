import { State } from './types'

const update = (payload: State) => {
  return {
    type: 'UPDATE_AUTH_DATA',
    payload
  }
}

const exampleActions = {
  update
}

export default exampleActions
