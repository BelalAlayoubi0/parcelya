import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import CompaniesView from '../views/companies/IndexView.vue'
// import notFoundPage from '../views/notFoundPage/IndexView.vue'
// import notFoundPage from '../views/address/IndexView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'index' },
    component: () => import('../views/home/IndexView.vue')
  },
  {
    path: '*',
    name: 'notFoundPage',
    meta: { title: 'notFoundPage' },
    component: () => import('../views/notFoundPage/IndexView.vue')
  },
  {
    path: '/companies',
    name: 'companies',
    component: () => import('../views/companies/IndexView.vue')
  },
  {
    path: '/address',
    name: 'address',
    meta: { title: 'address' },
    component: () => import('../views/address/IndexView.vue')
  },
  {
    path: '/address-add',
    name: 'address-add',
    meta: { title: 'address-add' },
    component: () => import('../views/address/AddView.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    meta: { title: 'messages' },
    component: () => import('../views/messages/IndexView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact',
    meta: { title: 'contact-us' },
    component: () => import('../views/contact/IndexView.vue')
  },
  {
    path: '/coupon',
    name: 'coupon',
    meta: { title: 'coupon' },
    component: () => import('../views/coupon/IndexView.vue')
  },
  {
    path: '/coupon-empty',
    name: 'EmptyView',
    meta: { title: 'coupon-empty' },
    component: () => import('../views/coupon/EmptyView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    meta: { title: 'faq' },
    component: () => import('../views/faq/IndexView.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    meta: { title: 'notifications' },
    component: () => import('../views/notifications/IndexView.vue')
  },
  {
    path: '/account',
    name: 'account',
    meta: { title: 'account' },
    component: () => import('../views/account/IndexView.vue')
  },
  {
    path: '/account-edit',
    name: 'account-edit',
    meta: { title: 'account-edit' },
    component: () => import('../views/account/AddView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    meta: { title: 'payment' },
    component: () => import('../views/payment/IndexView.vue')
  },
  {
    path: '/parcels-bills',
    name: 'parcels-bills',
    meta: { title: 'parcels-bills' },
    component: () => import('../views/bills/IndexView.vue')
  },
  {
    path: '/tracking',
    name: 'tracking',
    meta: { title: 'tracking' },
    component: () => import('../views/tracking/IndexView.vue')
  },
  {
    path: '/parcel-details',
    name: 'parcel-details',
    meta: { title: 'parcel-details' },
    component: () => import('../views/parcelDetails/IndexView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})

export default router
