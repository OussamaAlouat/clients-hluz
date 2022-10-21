<template>
  <div class="client-box">
    <v-row>
      <v-col>
        Name:  {{ clientName }}
      </v-col>
      <v-col>
        Address: {{ address }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Role: {{ role }}
      </v-col>
      <v-col>
        Building type: {{ buildingType }}
      </v-col>
    </v-row>
  </div>
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

  computed: {},
};
</script>

<style lang="scss">
.client-box {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 10px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px
    rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  width: 80%;
}
</style>
