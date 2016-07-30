import Types from 'constants/index'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: Types.COUNTER_INCREMENT,
    payload: value
  }
}

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter.count))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}
