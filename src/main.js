import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 引入样式的主入口文件
import './styles/index.scss'

// 加载svg的处理
import initSvgIcon from './icons/index.js'

// 用户鉴权
import './permission.js'

const app = createApp(App)
installElementPlus(app)
initSvgIcon(app)
app.use(store).use(router).mount('#app')

// 入口 main.js(导入模块:js模块) --> webpack  出口 js/app.js文件

// 【css,文件,字体,svg】 --> loader --> 对应的js模块 --> webpack

// 不需要配置,直接使用就行,因为项目环境已经直接配置了常见的loader

// svg导入后
// 1.他是由file - loader变成一个 / img / biyan.977e55b0.svg js模块
// 2.可以按照img方式加载
//    缺点:fill-loader 转化的js模块不能动态修改一个图片的颜色不利于封装一个全局组件

// 查看webpack的默认配置
// vue inspect 查看默认的webpack配置
// vue inspect --rules 查看所有的loader配置
// vue inspect --rule svg

// 如何配置webpack
// 1.项目根目录创建 vue.config.js
// 2.修改webpack的配置
//    a) 禁用file-loader 对某个目录下的svg的解析
//    b) 下载loader
//        npm install -D svg-sprite-loader //-D 保存在devlopment依赖中配置

/*
  退出业务:
    token的作用:
      a) token是由后台在首次登录的时候生成,通过response响应给前端
        意思是说一个token同时在前后端都有保存
      b) token表示用户的身份,是一个用户的令牌,对于服务器而言,只认token不认人
*/
