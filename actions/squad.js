export default {
  'tap' ({getters, commit}, character) {
    if (character) {
      if (getters['squad/has'](character)) {
        commit('squad/removeCharacter', character)
      } else if (!getters['squad/full']) {
        commit('squad/pushCharacter', character)
      }
    }
  }
}
