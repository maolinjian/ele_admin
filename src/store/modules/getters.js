// 集中暴露vuex各个模块需要暴露的属性和方法
export default {
  token: (state) => state.user.token
}
