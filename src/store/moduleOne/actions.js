export default {

  addNum({
    commit,
    state
  }, id) {
    commit("SAVE_ANSWERS", id);
    commit("CHANGE_TOPIC");
  },


  initialize({commit,state}){
    state.itemNum = 1;
  }

}
