<template lang="pug">
  div.home
    img(alt="Vue logo" src="../assets/logo.png")
    Start(msg="Welcome to Your Vue.js App")
</template>

<script>
/*  */
// @ is an alias to /src
import Start from '@/components/Start.vue'

export default {
  name: 'home',
  components: {
    Start
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 150px;
}
</style>