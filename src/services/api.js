import axios from '../plugins/axios';

export default {
  getAllClients() {
    return axios.get('/clients');
  },
  getClientsWithCups(cups) {
    return axios.get(`/clients?cups=${cups}`);
  },
  getSupplyPoints(cups) {
    return axios.get(`supplyPoints?cups=${cups}`);
  },
};
