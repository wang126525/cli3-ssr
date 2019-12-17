// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import qt from './components/qt'
Vue.use(Router)


export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        {path:"/",component:Index },
        {path:"/qt",component:qt },
      // ...
    ]
  })
}