<template>
  <v-card class="bg-main" max-width="340">
    <v-card-text>
      <div class="icon-box">
        <v-icon large color="rgba(245, 141, 27, 255)">{{icon}}</v-icon>
      </div>
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
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.icon-box {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
