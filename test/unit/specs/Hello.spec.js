import Vue from 'vue'
import Shopping from 'features/common/components/Shopping'

describe('Shopping.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Shopping)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.shopping h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
