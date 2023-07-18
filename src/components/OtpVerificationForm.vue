<script setup lang="ts">
import { ref, computed } from 'vue';

import OtpInput from '@/components/OtpInput.vue';

const otpLength = 4;

const otp = ref('');

const canSubmit = computed(() => otp.value.length === otpLength);

const handleSubmit = () => {
  console.log('verify otp code:', otp.value);
};
</script>

<template>
  <form
    class="otp-verification-form"
    @submit.prevent="handleSubmit"
  >
    <header class="otp-verification-form__header">
      <i class="otp-verification-form__icon bx bxs-check-shield"></i>
      <h4 class="otp-verification-form__title">
        Enter OTP Code
      </h4>
    </header>
    <main class="otp-verification-form__main">
      <otp-input
        v-model="otp"
        :length="otpLength"
      />
    </main>
    <footer class="otp-verification-form__footer">
      <button
        class="otp-verification-form__button"
        :class="{ 'otp-verification-form__button--active': canSubmit }"
        type="submit"
      >
        Verify OTP
      </button>
    </footer>
  </form>
</template>

<style scoped>
.otp-verification-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 30px 65px;
  border-radius: 12px;
  row-gap: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.otp-verification-form__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

.otp-verification-form__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  background: #4070f4;
  color: #fff;
  font-size: 2.5rem;
  border-radius: 50%;
}

.otp-verification-form__title {
  font-size: 1.25rem;
  color: #333;
  font-weight: 500;
}

.otp-verification-form__button {
  cursor: pointer;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: 9px 0;
  cursor: pointer;
  border-radius: 6px;
  pointer-events: none;
  background: #6e93f7;
  transition: all 0.2s ease;
}

.otp-verification-form__button--active {
  background: #4070f4;
  pointer-events: auto;
}

.otp-verification-form__button:hover {
  background: #0e4bf1;
}
</style>
