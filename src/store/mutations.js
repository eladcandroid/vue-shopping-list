import {
  addShopping,
  toggleShopping,
  editShopping,
  removeShopping,
  getShoppings
} from './types'

export default {
  [addShopping.type]: (state, payload) => state.shoppings.push(payload),
  [toggleShopping.type]: (state, payload) => (payload.done = !payload.done),
  [editShopping.type]: (state, payload) =>
    state.shoppings.filter(shopping => shopping.id === payload),
  [removeShopping.type]: (state, payload) =>
    state.shoppings.splice(state.shoppings.indexOf(payload), 1),
  [getShoppings.type]: (state, { list }) => {
    state.shoppings = list
  }
}
