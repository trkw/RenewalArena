<template lang="pug">
  pre.debug-root {{ info }}
</template>

<script>
  export default {
    data: () => ({
      info: {}
    }),
    onSocket: {
      'debug/info' (info) {
        this.info = info
      }
    }
  }
</script>

<style lang="less">
  .debug-root {
    border: 1px solid black;
    border-left: none;
    width: 100%;
    min-height: 300px;
  }
</style>

