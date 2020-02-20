import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  webInfo: {}

}

// 全局函数
const mutations = {
  // 获取网站信息
  SET_WEBINFO(state, data) {
    state.webInfo = data;
  },

}

// todo 与单页面不同，这里要返回函数
export default () => {
  return new Vuex.Store({
    state,
    mutations
  })
}
