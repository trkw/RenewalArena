<template lang="pug">
  .game-client(:is="clientStore.state")
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        clientStore: 'client'
      })
    }
  }
</script>
<style lang="less">
  .game-client {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    height: 561px;
  }
</style>

