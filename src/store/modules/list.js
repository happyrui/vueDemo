import ajax from '../../api'
// state
const state = {
    items: [],
    changeNum: 0
}
//getters
const getters = {

}
// actions
const actions = {
  // getItems({ commit }){
  //   console.log('aaaaa')
  //   // 分发mutations 修改 store 实例中的状态
  //   commit('ADD_TODO')
  //   state.items = ajax('https://api.douban.com/v2/movie/top250?count=10', {} );
  // }
  // 第一个参数是context, 是一个与store实例具有相同属性和方法的对象
  // aa 自定义参数
  actionItems(context, aa) {
    console.log('aaa')
    console.log(this)
    setTimeout( () => {
        context.commit( 'getItems', aa ); //context提交
    }, 2000)
  }
}
// mutations 
const mutations = {
  // state 当前state
  // aa 自定义参数
  async getItems (state, aa) {
    const result = await ajax('https://www.easy-mock.com/mock/5c24adb39a96a934e48de313/api/douban/movie/top', {
        method: 'get',
        data: {}
    })
    state.items = result.data.movie
    console.log(state.items)
  },
  changeNum (state, payload) {
    console.log(state, payload);
    state.changeNum = payload * payload
    console.log(state.changeNum);
  }
}

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export default {
  // 设置为true后表示 独立的带命名空间的模块，模块更具封装性和独立性
  // 都会变得有路径，在全局就找不到了
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}