<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div  class="input-container">
    <div style="width:80%">
      <v-text-field
        placeholder="Set cups"
        outlined
        v-model="cupsValue"
        class="input-container__input-hluz"
        type="text"
        id="cups"
      >
        <template v-slot:append>
          <v-hover v-slot="{ hover }">
            <v-icon
              large
              :color="hover ? 'rgba(229, 0, 126, 255)' : ''"
              :disabled="!cupsValue" @click="searchCUPS()"
            >
              mdi-magnify
            </v-icon>
          </v-hover>
        </template>
      </v-text-field>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data: () => ({
    cupsValue: '',
  }),

  methods: {
    searchCUPS() {
      if (this.cupsValue) {
        this.$emit('cupsToSearch', this.cupsValue);
      }
    },
  },
};
</script>

<style lang="scss">
.input-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  &__input-hluz {
    border-radius: 10px;
    height: 60px;
    justify-content: center;
  }
}
</style>
