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
      <clients-container/>
    </v-main>
  </v-app>
</template>

<script>
import ClientsContainer from './containers/clientsHluz/ClientsContainer.vue';

export default {
  name: 'App',

  components: {
    ClientsContainer,
  },

  data: () => ({
    //
  }),
};
</script>
