import Types from 'constants/index'

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: Types.COUNTER_INCREMENT,
    payload: value
  }
}

export function doubleAsync() {
  return {
    type: Types.DOUBLE_INCREMENT
  }
}

export default {
  increment,
  doubleAsync
}
