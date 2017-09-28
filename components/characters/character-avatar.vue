<template lang="pug">
  img.character-avatar(:src="img"
  , @dblclick="ondblclick"
  , @click="onclick")
</template>

<script>
  import {characters} from '../../data'

  export default {
    props: ['id'],
    computed: {
      isEmpty () {
        return !this.id
      },
      img () {
        if (this.isEmpty) {
          return undefined
        } else {
          return characters[this.id].img
        }
      }
    },
    methods: {
      ondblclick () {
        if (this.id) this.$emit('ondblclick', this.id)
      },
      onclick () {
        if (this.id) this.$emit('onclick', this.id)
      }
    }
  }
</script>
<style lang="less">
  .character-avatar {
    display: inline-block;
    border: 1px solid black;
    width: 48px;
    height: 48px;
    background-color: white;
  }
</style>

