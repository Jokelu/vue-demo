import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home = (resolve) => {
  import('@/views/home').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      component:home
    }
  ]
})
