import Vue from 'vue';
import Vuex from 'vuex';
import list from './modules/list';
import detail from './modules/detail';
import createLogger from 'vuex/dist/logger'
import ajax from '../api'

//注册 状态管理
Vue.use(Vuex)

const store = new Vuex.Store({
    // 子模块注入到总的store中
    modules: {
        list
    },
    // state: {
    //     items: []
    // },
    // getters: {
    //     itemsaaa: (state) => {
    //         return state.items //获取store中state的数据
    //     }
    // },
    // mutations: {
    //     // state 当前state
    //     // aa 自定义参数
    //     async getItems (state, aa) {
    //         const result = await ajax('https://api.douban.com/v2/movie/top250?count=10', {
    //             method: 'jsonp',
    //             data: {}
    //         })
    //         state.items = result.subjects
    //     },
    // },
    // actions: {
    //     // 第一个参数是context, 是一个与store实例具有相同属性和方法的对象
    //     // aa 自定义参数
    //     actionItems(context, aa) {
    //         console.log('aaa')
    //         console.log(this)
    //         setTimeout( () => {
    //             context.commit( 'getItems', aa ); //context提交
    //         }, 2000)
    //     }
    // },
    //生成状态快照的插件应该只在开发阶段使用
    //这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：
    plugins: []
    //日志插件用于一般的调试，设置如下：
    // logger 插件会生成状态快照，所以仅在开发环境使用
    // plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
    
    // 开启严格模式
    // 只能在开发环境下启动，在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
    // 不要在生产环境中启动，避免性能损失
    // strict: process.env.NODE_ENV !== 'production'
})
// 热重载
// if (module.hot) {
//     // 使 action 和 mutation 成为可热重载模块
//     module.hot.accept(['./mutations', './modules/a'], () => {
//       // 获取更新后的模块
//       // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
//       const newMutations = require('./mutations').default
//       const newModuleA = require('./modules/a').default
//       // 加载新模块
//       store.hotUpdate({
//         mutations: newMutations,
//         modules: {
//           a: newModuleA
//         }
//       })
//     })
// }
console.log(store)

export default store;