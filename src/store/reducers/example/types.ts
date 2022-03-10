export type ActionTypes = 'UPDATE_EXAMPLE_DATA'

export interface State {
  lorem?: string
}

export interface Action {
  type: ActionTypes
  payload: any
}
