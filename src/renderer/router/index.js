import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/home').default,
      children : [
        {path: '', component: require('@/pages/welcome').default},
        {name: 'polygonalChart', path: 'polygonalChart', component: require('@/pages/polygonalChart').default}
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
