import Vue from "vue"
import Vuex from "vuex"
import CreatePersistedstate from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
    plugins:[CreatePersistedstate],
    
})