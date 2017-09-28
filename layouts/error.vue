<template lang="pug">
  .container
    h1(v-if="error.statusCode === 404") Page not found
    h1(v-else) An error occurred
    nuxt-link(to="/") Home page
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // you can set a custom layout for the error page
  }
</script>
