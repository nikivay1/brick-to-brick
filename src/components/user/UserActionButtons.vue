<template>
  <div class="action-buttons">
    
    <Icon src="edit.svg" class="edit-btn" @click="emitEdit" />
    <Icon src="bin.svg" class="delete-btn" @click="emitDelete" />
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import Icon from '@/components/AppIcon.vue';

const emit = defineEmits(['edit', 'delete']);

const emitEdit = () => {
  emit('edit');
};
const emitDelete = () => {
  emit('delete');
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.action-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  i {
    height: 25px;
    width: 25px;
    color: $text-grey;
  }
}
.edit-btn, .delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: $text-grey;
  margin-left: 10px;
}
.edit-btn:hover {
  color: $primary-color;
}
.delete-btn:hover {
  color: $error-color;
}
</style>
