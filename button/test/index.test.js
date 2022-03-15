import { shallowMount } from '@vue/test-utils';
import Button from '../src/Button.vue';

describe('Button', () => {
  it('renders a button', () => {
    const wrapper = shallowMount(Button);
    console.assert(wrapper.find('button'));
  });
});
