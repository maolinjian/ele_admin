// 用户鉴权 路由守卫
import router from './router/index.js'
import store from './store/index.js'
const whiteRouter = ['/login']

// 进入每一个路由都会执行这个钩子
router.beforeEach((to, from, next) => {
  /*
    用户鉴权
      当用户为登录时(没有token),只能进入login页面
      用户登录后,token未过期之前,不允许进入login页面
  */
  if (store.getters.token) {
    // 登录
    if (to.path === '/login') {
      // 不允许
      next('/')
    } else {
      // 允许
      next()
    }
  } else {
    if (whiteRouter.indexOf(to.path) > -1) {
      // 未登录
      next()
    } else {
      next('login')
    }
  }
})
