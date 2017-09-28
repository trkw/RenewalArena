export const state = () => ({
  maxSize: 3,
  characters: []
})

export const getters = {
  has: (s) => (character) => {
    return s.characters.includes(character)
  },
  full: (s) => {
    return s.characters.length >= 3
  }
}

export const mutations = {
  removeCharacter (state, character) {
    state.characters = state.characters.filter(x => x !== character)
  },
  pushCharacter (state, character) {
    state.characters.push(character)
  }
}
