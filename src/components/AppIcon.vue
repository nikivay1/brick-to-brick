<template>
  <div class="icon">
    <img :src="iconSrc" alt="icon" :width="computedWidth" :height="computedHeight" />
  </div>
</template>

<script setup>
import { computed, defineProps} from 'vue';
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  small: {
    type: Boolean,
    default: false
  }
})
const computedWidth = computed(() => (props.small ? 16 : 24));
const computedHeight = computed(() => (props.small ? 16 : 24));
const iconSrc = computed(() => {
  try {
    return require(`@/assets/icon/${props.src}`);
  } catch (e) {
    console.error('Icon not found:', e);
    return props.src;
  }
});
</script>

<style scoped>
.icon {
  display: inline-block;
}

.icon img {
  object-fit: contain;
}
</style>
