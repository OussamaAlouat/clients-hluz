<template>
  <div>
    <search-input @cupsToSearch="setCupsToSearch"></search-input>
    <div v-for="(client, i) in clientsWithCuts" :key="i">
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
  </div>
</template>

<script>
import axios from 'axios';
import ClientHluz from '@/components/ClientHluz.vue';
import SearchInput from '@/components/SearchInput.vue';

export default {
  components: {
    ClientHluz,
    SearchInput,
  },
  data: () => ({
    clientsWithCuts: [],
    supplyPoint: {},
  }),
  mounted() {
    axios.get('http://localhost:3000/clients').then((result) => {
      console.log(result.data);
    });
  },
  methods: {
    setCupsToSearch(event) {
      console.log(event);

      axios.get(`http://localhost:3000/clients?cups=${event}`).then((result) => {
        this.clientsWithCuts = JSON.parse(JSON.stringify(result.data));
        console.log('Result: ', result.data);
      });

      axios.get(`http://localhost:3000/supplyPoints?cups=${event}`).then((result) => {
        this.supplyPoint = JSON.parse(JSON.stringify(result.data[0]));

        console.log('suplyPoint: ', result.data[0]);
      });
    },
  },

};
</script>

<style>

</style>
