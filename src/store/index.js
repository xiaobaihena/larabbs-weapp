import Vuex from '@wepy/x'
import users from './modules/user'
import notification from './modules/notification'

export default new Vuex.Store({
  modules: {
    users,
    notification
  },
  mutations: {
    // 增加
    increment (state) {
      state.counter++
    },
    // 减少
    decrement (state) {
      state.counter--
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
