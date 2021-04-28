<template>
  <Container/>
  <component :is="useBanner"></component>
  <Banner/>
</template>

<script>
import Container from './components/Container.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Container,
    Banner
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
