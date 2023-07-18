<script setup lang="ts">
import {
  computed,
  ref,
  watch,
  onMounted,
} from 'vue';

interface Props {
  length?: number;
  modelValue: string;
}

interface Emits {
  (event: 'update:modelValue', payload: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  length: 4,
});

const emit = defineEmits<Emits>();

const root = ref<HTMLDivElement>();

const focusInput = (index: number) => {
  const input = root.value?.children[index];

  if (input) {
    (input as HTMLInputElement).focus();
  }
};

onMounted(() => {
  focusInput(0);
});

const values = ref<string[]>([]);

const setValue = (index: number, value: string) => {
  values.value[index] = value;
};

const resetValue = (index: number) => {
  setValue(index, '');
};

const handleKeyUp = (event: KeyboardEvent, index: number) => {
  const { key } = event;

  if (key === 'ArrowRight' && index < props.length - 1) {
    focusInput(index + 1);
    return;
  }

  if (key === 'ArrowLeft' && index > 0) {
    focusInput(index - 1);
    return;
  }

  if ((key === 'Backspace' || key === 'Delete') && index > 0) {
    resetValue(index);
    focusInput(index - 1);
    return;
  }

  const matched = key.match(/^[0-9]$/);

  if (!matched) {
    resetValue(index);
    return;
  }

  setValue(index, key.charAt(0));
  focusInput(index + 1);
};

const otp = computed(() => {
  const truthyValues = values.value.filter(((value) => value));

  return truthyValues.length === props.length
    ? truthyValues.join('')
    : '';
});

watch(otp, (otp: string) => {
  emit('update:modelValue', otp);
});
</script>

<template>
  <div
    class="otp-input"
    ref="root"
  >
    <input
      v-for="item of length"
      v-model="values[item - 1]"
      :key="item"
      class="otp-input__input"
      type="text"
      maxlength="1"
      @keyup="handleKeyUp($event, item - 1)"
    />
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
