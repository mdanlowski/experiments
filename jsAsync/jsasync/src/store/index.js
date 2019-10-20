/*  */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      admin: null,
      avatarUrl: null,
      name: null,
      email: null,
    }
  },
  mutations: {
    setProfile(state, profileData) {
      state.profile = profileData;
    }
  },
  actions: {
  },
  modules: {
  }
})
