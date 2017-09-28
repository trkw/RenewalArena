export default {
  'info' ({store}, info) {
    store.commit('session/set', info)
  }
}
