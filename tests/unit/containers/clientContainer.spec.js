import { shallowMount } from '@vue/test-utils';
import ClientsContainer from '@/containers/clientsHluz/ClientsContainer.vue';
import ClientHluz from '@/components/ClientHluz.vue';
import SearchInput from '@/components/SearchInput.vue';
import NotFound from '@/components/NotFound.vue';
import mocks from '../../__mocks__/mocks';

describe('ClientsContainer.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ClientsContainer, {
      components: {
        ClientHluz,
        SearchInput,
        NotFound,
      },
    });
  });

  it('Container render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Displays not found when not found clients', async () => {
    wrapper.setData({ searched: true });
    await wrapper.vm.$nextTick();
    const notFound = wrapper.findComponent(NotFound);
    expect(notFound.exists()).toBe(true);
  });

  it('Displays one client card', async () => {
    wrapper = shallowMount(ClientsContainer, {
      components: {
        ClientHluz,
        NotFound,
        SearchInput,
      },
      computed: {
        showNotFoundClients: () => false,
        numberOfNeighbors: () => 2,
        clientsRooftopRevolution: () => mocks.curlClient,
      },
      data() {
        return {
          clientsWithCuts: mocks.curlClient,
          supplyPoint: mocks.selecedSuplyPoint,
          neighborsInfo: [
            ...mocks.suplyPoints,
          ],
          amounts: [],
          searched: true,
          loading: false,
        };
      },
    });

    await wrapper.vm.$nextTick();

    const clientHluz = wrapper.findComponent(ClientHluz);
    expect(clientHluz.exists()).toBe(true);
  });
});
