import Vue from 'vue'
import Vuex from 'vuex'
import friends from './modules/friends'

Vue.use(Vuex)

 export default new Vuex.Store({


  modules:{
   friends
  }
 })