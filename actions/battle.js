import {CLIENT_STATE} from '../store/client'

export default {
  'startSearch' ({commit, send, state}, type) {
    if (type) {
      send('battle/search', {
        type: type,
        characters: state.squad.characters
      }, true).then(() => {
        commit('client/setState', CLIENT_STATE.search)
      })
    }
  },
  'stopSearch' ({commit, state}) {
    if (state.client.state === CLIENT_STATE.search) {
      commit('client/setState', CLIENT_STATE.squad)
    }
  }
}
