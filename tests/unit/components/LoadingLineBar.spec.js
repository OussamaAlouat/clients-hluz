import { shallowMount } from '@vue/test-utils';
import LoadingLineBar from '@/components/LoadingLineBar.vue';

describe('LoadingLineBar.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LoadingLineBar, {
      propsData: {
        isLoaded: false,
      },
    });
  });

  it('Component render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
