<template>
  <div v-if="modelValue" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
        <button class="close-btn" @click="closeModal">×</button>
      </div>

      <div class="modal-body">
        <slot></slot> <!-- Основной контент модального окна -->
      </div>

      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch} from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
const isVisible = ref(props.modelValue);

watch(() => props.modelValue, (newVal) => {
  isVisible.value = newVal;
});
const closeModal = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>
