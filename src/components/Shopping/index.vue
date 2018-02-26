<template>
  <div class="shopping">
    <div class="shopping-list">
      <h2 class="header">ADD YOUR ITEMS HERE</h2>
      <h3 @click="addShopping('Clicked')"></h3>
      <ul>
        <li v-for="shopping in shoppings" :key="shopping.id" class="shopping-item">
          <input type="checkbox" name="shopping-done-checkbox" :checked="shopping.done" @change="toggleShopping(shopping)"/>
          <label for="shopping-done-checkbox" class="shopping-title">
          </label>
          <span @click="editShopping(shopping.id)" class="shopping-title" :class=" {'underlined': shopping.done, 'selected': currentShopping && shopping.id === currentShopping.id }">{{shopping.title}}</span>
          <span v-if="shopping.done" class="del-btn" @click="removeShopping(shopping)">x</span>
        </li>
        <li>
          <input class="add-input" type="text" placeholder="Add Item" @keyup.enter="submitShopping" />
        </li>
      </ul>
    </div>
    <div v-if="currentShopping" class="shopping-details" :class="{ 'shopping-details-showed': currentShopping }">
      <h2 class="header">{{currentShopping.title | uppercase}} DETAILS</h2>
      <ul>
        <li>
          <label for="details-input-quantity" class="details-label-quantity">Quantity
          </label>
          <input class="details-input-quantity" name="details-input-quantity" @blur="updateShopping(currentShopping)" type="text" placeholder="" v-model="currentShopping.quantity" />
        </li>
        <li>
          <label for="details-input-price" class="details-label-price">Price
          </label>
          <input class="details-input-price" name="details-input-price" @blur="updateShopping(currentShopping)" type="text" placeholder="" v-model="currentShopping.price" />
        </li>
        <li>
          <label for="details-input-description" class="details-label-description">Description
          </label>
          <input class="details-input-description" name="details-input-description" @blur="updateShopping(currentShopping)" type="text" placeholder="" v-model="currentShopping.description" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  // mapGetters,
  mapActions } from 'vuex'

import {
  toggleShopping,
  getShoppings,
  addShopping,
  editShopping,
  updateShopping,
  removeShopping
} from '../../store/types'

export default {
  name: 'shopping',
  created: function () {
    this.$store.dispatch(getShoppings.type)
  },
  data: function () {
    return {
      currentShopping: null
    }
  },
  methods: {
    ...mapActions({
      addShopping: addShopping.type,
      toggleShopping: toggleShopping.type,
      editShopping: editShopping.type,
      updateShopping: updateShopping.type
    }),
    // toggleShopping (event, shopping) {
    //   event.preventDefault()
    //   return this.$store.dispatch(toggleShopping.type, shopping)
    // },
    submitShopping (event) {
      if (!event.target.value.replace(/\s/g, '')) return
      this.addShopping(event.target.value)
      event.target.value = ''
    },
    editShopping (id) {
      this.currentShopping = this.getShopping(id)
    },
    getShopping (id) {
      return this.$store.getters.getShoppingById(id)
    },
    removeShopping (shopping) {
      this.$store.dispatch(removeShopping.type, shopping)
      if (shopping === this.currentShopping) this.currentShopping = null
    }
  },
  // computed: mapGetters({
  //   shoppings: 'getShoppings'
  // }),
  computed: {
    shoppings: function () {
      return this.$store.getters.getShoppings
    }
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
}

a {
  color: #42b983;
}

.shopping-item .underlined {
  text-decoration: line-through;
}

.shopping-item .selected {
  color: $text-color;
}

.del-btn {
  cursor: pointer;
  font-size: large;
  color: red;
  right: 10px;
  position: absolute;
}

.shopping-list {
  width: $shopping-list-width;
  color: $light-text-color;
  border: 1px solid $light-border-color;
  margin-top: 20px;
  margin-right: 0;
  display: inline-block;
  vertical-align: top;
}

.shopping li {
  text-align: left;
  position: relative;
}

.shopping-title {
  text-align: left;
  &:hover {
    cursor: pointer;
  }
}

.header {
  background: linear-gradient(
    #{$header-gradient-start},
    #{$header-gradient-end}
  );
  color: $header-color;
  text-align: left;
  padding-left: 10px;
  padding: $header-padding;
  font-size: $header-font-size;
  margin-top: 0;
}

.shopping-details {
  width: $shopping-details-width;
  color: $text-color;
  border: 1px solid $light-border-color;
  margin-top: 20px;
}

.shopping-details li {
  padding: 15px;
}

.shopping-details label {
  display: block;
}

.shopping-item {
  padding: $item-padding-top $item-padding-bottom $item-padding-right $item-padding-left;
  border-bottom: 1px solid $light-border-color;
}

.shopping-details input {
  width: 100%;
}

.shopping-details-showed {
  display: inline-block;
}

.add-input {
  border: none;
  font-size: $item-font-size;
  padding: $item-padding-top $item-padding-bottom $item-padding-right $item-padding-left;
}
</style>
