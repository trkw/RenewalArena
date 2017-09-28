export default {
  'setState' ({commit}, type) {
    if (type) {
      commit('client/setState', type)
    }
  }
}
