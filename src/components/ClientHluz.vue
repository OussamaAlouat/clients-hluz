<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ clientName }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ address }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ buildingType }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">Build</v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>

export default {
  name: 'ClientHluz',
  props: {
    clientName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
    buildingType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>
