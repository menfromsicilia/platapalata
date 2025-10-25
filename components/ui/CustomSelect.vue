<template>
  <div class="custom-select" ref="selectRef">
    <div 
      class="select-trigger" 
      :class="{ open: isOpen }"
      @click="toggleDropdown"
    >
      <span>{{ selectedLabel }}</span>
      <svg 
        class="select-arrow" 
        :class="{ rotate: isOpen }"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
    
    <transition name="dropdown">
      <div v-if="isOpen" class="select-dropdown">
        <div 
          v-for="option in options" 
          :key="option.value"
          class="select-option"
          :class="{ selected: modelValue === option.value }"
          @click="selectOption(option.value)"
        >
          {{ option.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
interface SelectOption {
  label: string
  value: string
}

interface Props {
  modelValue: string
  options: SelectOption[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

const selectedLabel = computed(() => {
  const selected = props.options.find(opt => opt.value === props.modelValue)
  return selected?.label || 'Выберите...'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (value: string) => {
  emit('update:modelValue', value)
  isOpen.value = false
}

// Закрытие при клике вне
const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.custom-select {
  position: relative;
  width: 100%;
}

.select-trigger {
  width: 100%;
  padding: 0.875rem 1rem;
  padding-right: 2.5rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  font-size: 1rem;
  background: $color-bg-primary;
  color: $color-text-light;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: $color-accent-blue;
  }

  &.open {
    border-color: $color-accent-blue;
    box-shadow: 0 0 0 3px rgba(102, 192, 244, 0.2);
  }
}

.select-arrow {
  width: 20px;
  height: 20px;
  color: $color-accent-blue;
  transition: transform 0.3s;
  flex-shrink: 0;

  &.rotate {
    transform: rotate(180deg);
  }
}

.select-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: $color-bg-secondary;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  box-shadow: $shadow-lg;
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
}

.select-option {
  padding: 0.875rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  color: $color-text-light;

  &:hover {
    background: $color-bg-accent;
    color: $color-accent-blue;
  }

  &.selected {
    background: rgba(102, 192, 244, 0.1);
    color: $color-accent-blue;
    font-weight: 600;
  }
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

