<template>
  <div class="spinner" v-if="props.isVisible"></div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: auto; 
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
