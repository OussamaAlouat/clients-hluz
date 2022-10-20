import { shallowMount } from '@vue/test-utils';
import NotFound from '@/components/NotFound.vue';

describe('NotFound.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NotFound);
  });

  it('Component render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Text of component must to be equal as espected', () => {
    const expectedText = 'There are no clients for that CUT';
    const recivedText = wrapper.text();
    expect(recivedText).toEqual(expectedText);
  });
});
