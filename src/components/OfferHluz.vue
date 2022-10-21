<template>
  <v-card class="mx-auto bg-main" max-width="340">
    <v-card-text>
      <P class="text-h4 text--primary">
        {{ type }}
      </P>

      <p class="text-h5 text--primary">
        {{ amount }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OfferComponent',
  props: {
    amount: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>
