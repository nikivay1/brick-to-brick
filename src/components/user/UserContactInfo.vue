<template>
  <div class="contact-info flex justify-space-between gap-3">
    <div class="flex gap-2">
      <div class="flex flex-column justify-end align-start">        
        <label>Телефон:</label>
        <p class="no-warp" ><span class="status-dot" :class="{ active: props.isActive }"></span>{{ isActive ? 'Активен' : 'Не активен' }}</p>
      </div>
      <div class="flex justify-space-between flex-column">
        <div class="flex flex-column align-start">
          <label>Телефон:</label>
          <p> {{ props.phone }}</p>
        </div>
        <div class="flex flex-column align-start">
          <label>Телефон родителей:</label>
          <p> {{ props.parentPhone }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-space-between flex-column">
      <div class="flex flex-column align-start">
        <label>Дата рождения:</label>
        <p> {{ props.birthDate }} ({{ props.age }} лет)</p>
      </div>
      <div class="flex flex-column align-start">
        <label>Адрес:</label>
        <p class="text-ellipsis contact-info_address"> {{ props.address }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  phone: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  parentPhone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}
);
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';
.contact-info{
  & > div {
    flex: 1;
  }
  &_address{
    max-width: 200px;
  }
  label {
    font-size: 14px;
    color: $text-grey;
    text-wrap: nowrap;
  }
  p{
    margin: unset;
    text-align: left;
    font-size: 18px;
    text-wrap: nowrap;
    color: $text-main-color;
  }
}
.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 5px;
  background-color: red;
}
.status-dot.active {
  background-color: green;
}
</style>
