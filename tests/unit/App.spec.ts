import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';

describe('App.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.vm).toBeDefined();
  });
});
