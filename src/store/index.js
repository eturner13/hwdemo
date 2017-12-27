import Vue from 'vue'
import Vuex from 'vuex'

import mockData from '@/assets/mock'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    data: mockData,
    currentDate: new Date(2017, 11, 1),
    editableDate: new Date(2017, 11, 3)
  },
  getters: {
    formattedCurrentDate: state => {
      return (state.currentDate.getMonth() + 1) + '/' + state.currentDate.getDate()
    }
  },
  actions: {},
  mutations: {
    saveItem (state, item) {
      let target = state.data.filter(entry => { return entry.id === item.id })
      target[0] = item
    }
  },
  strict: debug
})
