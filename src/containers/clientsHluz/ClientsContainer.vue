<template>
  <div class="h-100">
    <search-input @cupsToSearch="setCupsToSearch"></search-input>
    <div
      v-for="(client, i) in clientsRooftopRevolution"
      :key="i"
      class="d-flex justify-center mb-10">
      <client-hluz
        :key="i"
        :clientName="client.full_name"
        :address="client.address"
        :role="client.role"
        :buildingType="client.building_type"
      >
      </client-hluz>
    </div>

    <div v-for="(amount, index) in amounts" :key="index">
      <offer-hluz :amount="amount.amount" :type="amount.type"></offer-hluz>
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
import OfferHluz from '@/components/OfferHluz.vue';

export default {
  components: {
    ClientHluz,
    SearchInput,
    NotFound,
    OfferHluz,
  },

  data: () => ({
    clientsWithCuts: [],
    supplyPoint: {},
    searched: false,
    neighborsInfo: [],
    amounts: [],
  }),
  mounted() {
    api.getAllClients().then((result) => {
      console.log(result.data);
    });
  },
  methods: {
    setCupsToSearch(event) {
      const clients = api.getClientsWithCups(event);
      const supplyPointPromise = api.getSupplyPoints(event);
      Promise.all([clients, supplyPointPromise]).then((values) => {
        // eslint-disable-next-line prefer-destructuring
        this.clientsWithCuts = values[0].data;
        console.log('Values on promise: ', values);

        const resultOfSuplyPromise = values[1];
        if (resultOfSuplyPromise.data && resultOfSuplyPromise.data.length > 0) {
        // eslint-disable-next-line prefer-destructuring
          this.supplyPoint = resultOfSuplyPromise.data[0];
          this.amounts.push({
            type: 'Standard offer',
            amount: this.supplyPoint.invoiced_amount,
          });

          this.getAllNeighborsInformation();
        }

        // eslint-disable-next-line prefer-destructuring
        this.searched = true;
      });
    },

    getAllNeighborsInformation() {
      if (this.supplyPoint && this.supplyPoint.neighbors) {
        this.supplyPoint.neighbors.forEach(async (elem) => {
          const value = await this.getNeighborsInformation(elem);
          this.neighborsInfo.push(value);
        });
      }
    },

    async getNeighborsInformation(neighborCups) {
      console.log('llama aqui: ', neighborCups);
      const neighbor = await api.getSupplyPoints(neighborCups);
      console.log('neighbor: ', neighbor.data);
      return neighbor.data;
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
