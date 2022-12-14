import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';

describe('SearchInput.vue', () => {
  it('Component render', () => {
    const wrapper = shallowMount(SearchInput, {});
    expect(wrapper).toMatchSnapshot();
  });

  it('On click on searchCUPS function will emit "cupsToSearch" event', () => {
    const wrapper = shallowMount(SearchInput, {});
    wrapper.setData({
      cupsValue: 'cupsValue',
    });

    wrapper.vm.searchCUPS();
    expect(wrapper.emitted()).toHaveProperty('cupsToSearch');
  });

  it('On click on searchCUPS function not will emit "cupsToSearch" because cupsValue is empty', () => {
    const wrapper = shallowMount(SearchInput, {});

    wrapper.vm.searchCUPS();
    expect(wrapper.emitted()).not.toHaveProperty('cupsToSearch');
  });
});
