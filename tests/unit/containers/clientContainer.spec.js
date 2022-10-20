import { shallowMount } from '@vue/test-utils';
import ClientsContainer from '@/containers/clientsHluz/ClientsContainer.vue';

describe('ClientsContainer.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ClientsContainer, {
      mocks: {
        api: jest.fn(),
      },
    });
  });

  it('Container render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
