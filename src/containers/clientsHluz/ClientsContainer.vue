<template>
  <div class="h-100">
    <search-input @cupsToSearch="setCupsToSearch"></search-input>
    <div
      class="d-flex justify-center"
      v-if="clientsRooftopRevolution && clientsRooftopRevolution.full_name"
    >
      <client-hluz
        :clientName="clientsRooftopRevolution.full_name"
        :address="clientsRooftopRevolution.address"
        :role="clientsRooftopRevolution.role"
        :buildingType="clientsRooftopRevolution.building_type"
      >
      </client-hluz>
    </div>

    <div class="offer-container">
      <offer-hluz
        v-for="(amount, index) in amounts"
        :key="index"
        :amount="amount.amount"
        :type="amount.type"
        :icon="amount.icon"
      ></offer-hluz>
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
    clientsWithCuts: {},
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
    resetData() {
      this.supplyPoint = {};
      this.neighborsInfo = [];
      this.amounts = [];
      this.clientsWithCuts = {};
    },

    async setCupsToSearch(event) {
      this.resetData();
      const clients = api.getClientsWithCups(event);
      const supplyPointPromise = api.getSupplyPoints(event);
      Promise.all([clients, supplyPointPromise]).then((values) => {
        // eslint-disable-next-line prefer-destructuring
        this.clientsWithCuts = values[0].data[0];
        const resultOfSuplyPromise = values[1];

        if (resultOfSuplyPromise.data && resultOfSuplyPromise.data.length > 0) {
        // eslint-disable-next-line prefer-destructuring
          this.supplyPoint = resultOfSuplyPromise.data[0];
          this.getAllNeighborsInformation();
        }

        this.searched = true;
      });
    },

    getAllNeighborsInformation() {
      if (this.supplyPoint && this.supplyPoint.neighbors) {
        this.supplyPoint.neighbors.forEach(async (elem) => {
          const value = await this.getNeighborsInformation(elem);
          this.neighborsInfo.push(...value);
        });
      }
    },

    async getNeighborsInformation(neighborCups) {
      const neighbor = await api.getSupplyPoints(neighborCups);
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
      if (this.clientsWithCuts && this.clientsWithCuts.building_type === 'house' && this.numberOfNeighbors >= 1) {
        return this.clientsWithCuts;
      }

      return {};
    },

    showNotFoundClients() {
      return (
        this.clientsRooftopRevolution
        && !this.clientsRooftopRevolution.full_name
        && this.searched
      );
    },

    isClientHaveBasicDiscount() {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.neighborsInfo.length; i++) {
        const { p1, p2 } = this.neighborsInfo[i].power;

        if (p1 >= this.supplyPoint.power.p1 || p2 >= this.supplyPoint.power.p2) {
          return false;
        }
      }

      if (this.neighborsInfo.length === 0) {
        return false;
      }

      return true;
    },

    isClientHaveSpecialDiscount() {
      let sum = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.neighborsInfo.length; i++) {
        console.log('this.neighborsInfo.length: ', this.neighborsInfo[i]);
        sum += parseFloat(this.neighborsInfo[i].invoiced_amount);
      }

      if (sum <= 100) {
        return false;
      }

      return true;
    },
  },

  watch: {
    neighborsInfo() {
      if (
        this.supplyPoint
        && this.supplyPoint.neighbors
        && this.neighborsInfo.length === this.supplyPoint.neighbors.length
      ) {
        const amount = this.supplyPoint.invoiced_amount;
        if (this.clientsRooftopRevolution && this.clientsRooftopRevolution.full_name) {
          this.amounts.push({
            type: 'Standard offer',
            amount,
            icon: 'mdi-lightbulb-on-10',
          });
        }

        if (this.isClientHaveBasicDiscount) {
          const amountBasic = parseFloat(amount) * 0.95;
          this.amounts.push({
            type: 'Basic discount',
            amount: amountBasic,
            icon: 'mdi-lightbulb-on-40',
          });
        }

        if (this.isClientHaveSpecialDiscount) {
          const amountSpecial = parseFloat(amount) * 0.88;
          this.amounts.push({
            type: 'Special discount',
            amount: amountSpecial,
            icon: 'mdi-lightbulb-on-90',
          });
        }
      }
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

.offer-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
}
</style>
