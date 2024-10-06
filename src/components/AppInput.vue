<template>
  <div class="input">
    <div class="input-wrapper">
      <label :for="inputId" :class="{ 'float-label': isFocused || inputValue }">
        {{ label }} <span v-if="required" class="required">*</span>
      </label>
      <input
        :id="inputId"
        :type="type"
        v-model="inputValue"
        @focus="isFocused = true"
        @blur="onBlur"
        class="styled-input"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  inputId: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  },
  type: {
    type: String,
    default: 'text'
  }
})
const inputValue = ref(props.modelValue)
const isFocused = ref(false)

const onBlur = () => {
  if (!inputValue.value) {
    isFocused.value = false;
  }
}
watch(() => props.modelValue,
  (newVal) =>  {
    inputValue.value = newVal;
  }
)
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.input {
  position: relative;
  width: 100%;
}
.input-wrapper {
  position: relative;
}
label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 16px;
  color: $button-grey;
  transition: 0.2s ease all;
  pointer-events: none;
}
.styled-input {
  border: none;
  border-bottom: 1px solid $button-grey;
  width: 100%;
  padding: 16px 0 5px 0;
  font-size: 16px;
  color: $text-grey;
  background: transparent;
  outline: none;
  transition: border-color 0.3s;
}
.styled-input:focus {
  border-bottom: 1px solid $primary-color;
}
.float-label {
  top: 0;
  font-size: 12px;
  color: $text-grey;
  transform: unset;
}
.required {
  color: $error-color;
  font-size: 12px;
}
</style>
