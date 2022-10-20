<template>
  <div class="h-100">
    <search-input @cupsToSearch="setCupsToSearch"></search-input>
    <div v-for="(client, i) in clientsRooftopRevolution" :key="i">
      <client-hluz
        :key="i"
        :clientName="client.full_name"
        :address="client.address"
        :role="client.role"
        :buildingType="client.building_type"
        :neighbors="supplyPoint.neighbors"
        :tarif="supplyPoint.tariff"
        :power="supplyPoint.power"
        :amount="supplyPoint.invoiced_amount"
      >
      </client-hluz>
    </div>

    <div v-if="showNotFoundClients" class="h-100 not-found-container">
      <not-found />
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

import ClientHluz from '@/components/ClientHluz.vue';
import SearchInput from '@/components/SearchInput.vue';
import NotFound from '@/components/NotFound.vue';

export default {
  components: {
    ClientHluz,
    SearchInput,
    NotFound,
  },

  data: () => ({
    clientsWithCuts: [],
    supplyPoint: {},
    searched: false,
  }),
  mounted() {
    api.getAllClients().then((result) => {
      console.log(result.data);
    });
  },
  methods: {
    setCupsToSearch(event) {
      api.getClientsWithCups(event).then((result) => {
        this.clientsWithCuts = JSON.parse(JSON.stringify(result.data));
        console.log('Result: ', result.data);
      });

      api.getSupplyPoints(event).then((result) => {
        if (result.data && result.data.length > 0) {
          this.supplyPoint = JSON.parse(JSON.stringify(result.data[0]));
        }

        console.log('suplyPoint: ', result.data[0]);
      });

      this.searched = true;
    },
  },
  computed: {
    numberOfNeighbors() {
      if (this.supplyPoint && this.supplyPoint.neighbors) {
        return this.supplyPoint?.neighbors.length;
      }

      return 0;
    },

    clientsRooftopRevolution() {
      const clients = this.clientsWithCuts.filter((client) => client.building_type === 'house');
      return this.numberOfNeighbors >= 1 ? clients : [];
    },

    showNotFoundClients() {
      return this.clientsRooftopRevolution.length === 0 && this.searched;
    },
  },

};
</script>

<style lang="scss">
.h-100 {
  height: calc(100% - 60px);
}

.not-found-container{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
