<template lang="pug">
  .character-list
    character-avatar.character(v-for="character in characters", :key="character.id", :id="character.id"
    , @onclick="onclick(character.id)", @ondblclick="ondblclick(character.id)")
</template>

<script>
  import {characters} from '../../data'

  export default {
    data: () => ({
      characters: characters
    }),
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
  .character-list {
    line-height: 0;
    .character {
      margin: 4px;
    }
  }
</style>

