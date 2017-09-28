export const CLIENT_STATE = {
  squad: 'client-squad',
  search: 'client-search',
  battle: 'client-battle'
}

export const state = () => ({
  state: CLIENT_STATE.squad
})

export const mutations = {
  setState (state, newState) {
    state.state = newState
  }
}
