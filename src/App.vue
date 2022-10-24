<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.svg"
          transition="scale-transition"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <hluz-view />
    </v-main>
  </v-app>
</template>

<script>
import HluzView from '@/views/HluzView.vue';

export default {
  name: 'App',

  components: {
    HluzView,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
</style>
