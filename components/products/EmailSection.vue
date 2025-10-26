<template>
  <div class="email-section">
    <h2 class="section-title">Оформление покупки</h2>
    <input 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('validate')"
      type="email" 
      class="form-input"
      :class="{ 'error': error }"
      placeholder="Email"
    >
    <p v-if="error" class="form-error">{{ error }}</p>
    <p class="form-hint">Чек и подтверждение покупки отправим на указанный email после оплаты.</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  error?: string
}

defineProps<Props>()

defineEmits<{
  'update:modelValue': [value: string]
  'validate': []
}>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.email-section {
  background: $color-bg-secondary;
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid $color-bg-accent;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: $color-text-light;
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  font-size: 1rem;
  background: $color-bg-primary;
  color: $color-text-light;
  transition: all 0.2s;

  &::placeholder {
    color: $color-gray;
  }

  &:hover {
    border-color: $color-accent-blue;
  }

  &:focus {
    outline: none;
    border-color: $color-accent-blue;
    box-shadow: 0 0 0 3px rgba(102, 192, 244, 0.2);
  }

  &.error {
    border-color: #f44336;
  }
}

.form-error {
  color: #f44336;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.form-hint {
  font-size: 0.875rem;
  color: $color-gray;
  margin-top: 0.5rem;
  line-height: 1.5;
}
</style>

