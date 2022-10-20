<template>
  <v-card class="mx-auto bg-main" max-width="340">
    <v-card-text>
      <p class="text-h4 text--primary">
        {{ clientName }}
      </p>

      <p class="text--primary">{{ address }}</p>
      <p class="text--primary">{{ role }}</p>
      <p>Type: {{ buildingType }}</p>
    </v-card-text>
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
    amount: {
      type: String,
      required: true,
    },
    neighbors: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  computed: {},
};
</script>

<style lang="scss">
</style>
