<script setup lang="ts">
import OtpVerificationForm from '@/components/OtpVerificationForm.vue';
</script>

<template>
  <div class="container">
    <otp-verification-form />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #4070f4;
}
</style>
