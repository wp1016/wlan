import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
// import LoginForm from '@/components/login-form'
import { setToken, canTurnTo, setTitle } from '@/libs/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (store.state.user.hasGetInfo) {
    turnTo(to, store.state.user.access, next)
  } else {
    store.dispatch('getUserInfo').then(user => {
      // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
      turnTo(to, user.access, next)
    }).catch(() => {
      setToken('')
      if (to.name === homeName) {
        next()
      } else {
        next({
          name: homeName
        })
      }
    })
  }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
