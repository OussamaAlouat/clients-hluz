import { shallowMount } from '@vue/test-utils';
import ClientHluz from '@/components/ClientHluz.vue';

describe('ClientHluz.vue', () => {
  const props = {
    clientName: 'client',
    address: 'address1 ',
    role: 'role1',
    buildType: 'house',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ClientHluz, {
      propsData: { ...props },
    });
  });

  it('Component render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
