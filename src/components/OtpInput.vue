<template>
  <div class="otp-input">
    <input class="otp-input__input" type="text" autofocus />
    <input class="otp-input__input" type="text" disabled />
    <input class="otp-input__input" type="text" disabled />
    <input class="otp-input__input" type="text" disabled />
  </div>
</template>

<style scoped>
.otp-input {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
}

.otp-input__input {
  height: 45px;
  width: 42px;
  border-radius: 6px;
  outline: none;
  font-size: 1.125rem;
  text-align: center;
  border: 1px solid #ddd;
}

.otp-input__input:focus {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}
</style>
