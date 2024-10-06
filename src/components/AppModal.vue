<template>
  <div v-if="modelValue" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header flex justify-space-between align-center">
        <div class="modal-header_title">
          <slot name="title"></slot>
        </div>
        <Icon src="close.svg" @click="closeModal" />
      </div>

      <div class="modal-body">
        <slot></slot> <!-- Основной контент модального окна -->
      </div>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch} from 'vue';
import Icon from '@/components/AppIcon.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});
const emit = defineEmits(['closeModal']);
const isVisible = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    isVisible.value = newValue;
  }
);
const closeModal = () => {
  emit('closeModal', false);
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

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
.modal-header{
  color: $primary-color;
  padding-bottom: $offset-20;
  &_title{    
    font-size: 36px;
    font-weight: 700;
  }
}
.modal-content {
  background-color: $bg-color;
  padding: 30px;
  border-radius: 8px;
  max-width: 650px;
  width: 100%;
  position: relative;
}
</style>
