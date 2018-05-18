import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import home from '@/pages/home'
import item from '@/pages/item'
import score from '@/pages/score'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'main',
    component: main,
    children: [{
        path: '',
        component: home
      },
      {
        path: 'item',
        component: item
      },
      {
        path: 'score',
        component: score
      },
    ]
  }]
})
