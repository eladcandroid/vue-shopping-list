import {
  addShopping,
  toggleShopping,
  removeShopping,
  editShopping,
  updateShopping,
  getShoppings
} from './types'
import { uuid } from 'vue-uuid'
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000'

export default {
  [getShoppings.type] (context) {
    axios.get(SERVER_URL + '/shoppings').then(response => {
      context.commit(getShoppings.type, { list: response.data })
    })
  },

  [addShopping.type] (context, payload) {
    let newItem = {
      id: uuid.v4(),
      title: payload,
      done: false
    }
    axios.post(SERVER_URL + '/shoppings', newItem).then(response => {
      context.commit(addShopping.type, newItem)
    })
  },

  [toggleShopping.type] (context, shopping) {
    context.commit(toggleShopping.type, shopping)
    axios.put(SERVER_URL + '/shoppings', shopping).then(response => {
    })
  },

  [editShopping.type] (context, shopping) {
    context.commit(editShopping.type, shopping)
  },

  [updateShopping.type] (context, shopping) {
    axios.put(SERVER_URL + '/shoppings', shopping).then(response => {
    })
  },

  [removeShopping.type] (context, shopping) {
    axios.delete(SERVER_URL + '/shoppings', { data: {shopping} }).then(response => {
      context.commit(removeShopping.type, shopping)
    })
  }
}
