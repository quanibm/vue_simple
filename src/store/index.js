import vue from 'vue'
import vuex from 'vuex'
import state from './moduleOne/state'
import mutations from './moduleOne/mutations'
import actions from './moduleOne/actions'


vue.use(vuex);

const moduleOne = {
  state: state
}

const store = new vuex.Store({
  // modules: {
  //   moduleOne
  // }
  state:state,
  mutations:mutations,
  actions:actions
})

export default store
