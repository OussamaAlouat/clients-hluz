import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';

describe('SearchInput.vue', () => {
  it('Component render', () => {
    const wrapper = shallowMount(SearchInput, {});
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('On click on searchCUPS function will emit "cupsToSearch" event', () => {
    const wrapper = shallowMount(SearchInput, {});
    wrapper.setData({
      cupsValue: 'cupsValue',
    });

    wrapper.vm.searchCUPS();
    expect(wrapper.emitted()).toHaveProperty('cupsToSearch');
  })
});
