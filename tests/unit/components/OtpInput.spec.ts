import { shallowMount } from '@vue/test-utils';

import OtpInput from '@/components/OtpInput.vue';

describe('OtpInput.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(OtpInput);

    expect(wrapper.vm).toBeDefined();
  });
});
