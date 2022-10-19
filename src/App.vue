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
      <ClientHluz/>
    </v-main>
  </v-app>
</template>

<script>
import ClientHluz from './components/ClientHluz.vue';

export default {
  name: 'App',

  components: {
    ClientHluz,
  },

  data: () => ({
    //
  }),
};
</script>
