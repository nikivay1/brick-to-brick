<template>
  <div class="add-document flex flex-column" @click="onClick">
    <Icon class="add-document__icon" src="plus.svg" large/>
    <p>Добавить документ</p>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import Icon from '@/components/AppIcon.vue';

const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.add-document {
  align-items: center;
  justify-content: center;
  border: 2px solid $text-grey;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  p {
    font-size: 18px;
    color: $text-grey;
    margin: unset;
  }
}
</style>
