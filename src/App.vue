<template>
  <div id="app">
    <div class="header">ShoppingList</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
@import "./styles/variables.scss";

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid $light-border-color;
  padding-bottom: 10px;
}
.header {
  background: linear-gradient(#{$header-gradient-start}, #{$header-gradient-end});
  color: $header-color;
  text-align: left;
  padding-left: 10px;
  font-size: $app-header-font-size;
  padding: $header-padding;
}


@media (max-width: 480px) {
  .header {
    text-align: center;
  }
}

</style>
