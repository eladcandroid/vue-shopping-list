export default {
  getShoppings: state => state.shoppings,
  getShoppingById: state => id => {
    return state.shoppings.find(shopping => shopping.id === id)
  }
}
