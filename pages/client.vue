<template lang="pug">
  .client-page
    game-client
    debug-root.debug-root
</template>

<script>
  export default {
    layout: 'client'
  }
</script>

<style lang="less">
  .client-page {
    .debug-root {
      margin-top: 14px;
    }
  }
</style>
