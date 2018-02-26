import Vue from 'vue'
import Router from 'vue-router'
// import Shopping from '../features/common/components/Shopping'
import Shopping from '../components/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shopping',
      component: Shopping
    }
  ]
})
