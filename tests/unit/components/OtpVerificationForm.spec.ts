import { shallowMount } from '@vue/test-utils';

import OtpVerificationForm from '@/components/OtpVerificationForm.vue';

describe('OtpVerificationForm.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(OtpVerificationForm);

    expect(wrapper.vm).toBeDefined();
  });
});
