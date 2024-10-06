<template>
  <div class="icon">
    <img :src="iconSrc" :alt="props.alt" :style="computedClass" />
  </div>
</template>

<script setup>
import { computed, defineProps} from 'vue';
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  large: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '16px' 
  },
  height: {
    type: String,
    default: '16px'
  }
})

const computedClass = () => {
  if (this.large) {
    return {
      width: '32px',
      height: '32px'
    };
  } else if (this.small) {
    return {
      width: '12px',
      height: '12px'
    };
  }
  return {
    width: this.width,
    height: this.height
  };
}

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
