<template>
  <div>
    <search-input></search-input>
    <client-hluz></client-hluz>
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
  mounted() {
    axios.get('http://localhost:3000/clients').then((result) => {
      console.log(result.data);
    });
  },
};
</script>

<style>

</style>
