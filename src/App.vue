<template>
  <div id="app">
    <client-hluz></client-hluz>
  </div>
</template>

<script>
import ClientHluz from '@/components/ClientHluz.vue';

export default {
  name: 'App',
  components: {
    ClientHluz,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
