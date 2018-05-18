const SAVE_ANSWERS = "SAVE_ANSWERS"
const CHANGE_TOPIC = "CHANGE_TOPIC"





export default {
  [SAVE_ANSWERS](state, index) {
    state.answerid.push(index)
  },
  [CHANGE_TOPIC](state) {
    state.itemNum++
  }
}
