<template lang="pug">
  .squad-list
    character-avatar.character(v-for="characterId in characters", :key="characterId", :id="characterId"
    , @onclick="onclick(characterId)", @ondblclick="ondblclick(characterId)")
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        characters: (s) => {
          let characters = s.squad.characters.slice(0, 3)
          characters.length = 3
          return characters
        }
      })
    },
    methods: {
      ondblclick (characterId) {
        if (characterId) this.$emit('ondblclick', characterId)
      },
      onclick (characterId) {
        if (characterId) this.$emit('onclick', characterId)
      }
    }
  }
</script>
<style lang="less">
  .squad-list {
    display: flex;
    justify-content: center;
    .character {
      margin: 4px;
    }
  }
</style>

