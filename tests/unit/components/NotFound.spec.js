import { shallowMount } from '@vue/test-utils';
import NotFound from '@/components/NotFound.vue';
import Vuetify from 'vuetify';

describe('NotFound.vue', () => {
  it('Component render', () => {
    const wrapper = shallowMount(NotFound, {
      Vuetify,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
