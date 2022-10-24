<template>
  <v-progress-linear
    height="10"
    striped
    color="deep-orange"
    v-model="value"
    :active="display"
    :indeterminate="query"
    :query="true"
  >
  </v-progress-linear>
</template>

<script>
export default {
  name: 'LoadingLineBar',
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      value: 0,
      query: false,
      display: true,
      interval: 0,
      increment: 45,
    };
  },

  mounted() {
    this.queryAndIndeterminate();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    queryAndIndeterminate() {
      this.query = true;
      this.display = true;
      this.value = 0;

      setTimeout(() => {
        this.query = false;

        // eslint-disable-next-line consistent-return
        this.interval = setInterval(() => {
          if (this.value === 100) {
            clearInterval(this.interval);
            this.display = false;
            return setTimeout(this.queryAndIndeterminate, 2000);
          }

          this.value += this.incremet;
        }, 1000);
      }, 2500);
    },
  },

  watch: {
    isLoaded() {
      if (this.isLoaded) {
        this.increment = 100;
      }
    },
  },
};
</script>

<style>

</style>
