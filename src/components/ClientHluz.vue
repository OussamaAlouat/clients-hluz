<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Cecil Grant
        </v-list-item-title>
        <v-list-item-subtitle>Sweet potato street, 2</v-list-item-subtitle>
        <v-list-text>customer-basic</v-list-text>
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

    adress: {
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
