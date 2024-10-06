<template>
  <div class="contract-card flex justify-space-between gap-4">
    <div class="contract-info flex flex-column justify-space-between">
      <div class="flex flex-column align-start gap-1">
        <span class="contract-title text-ellipsis">{{ contract.documentName }}</span>
        <span class="contract-status flex align-center">
          <span class="status-dot" :class="{ active: contract.status === 'active' }"></span> {{ contract.status === 'active' ? 'Заключен' : 'Расторгнут' }}
        </span>

        <div class="contract-dates">
          {{ contract.startDate }} - {{ contract.endDate }}
        </div>
      </div>

      <div class="contract-actions flex gap-6 justify-start">  
        <Icon src="printer.svg" @click="printContract" />
        <Icon src="edit.svg" @click="editContract" />
        <Icon src="bin.svg" @click="deleteContract" />
      </div>
    </div>

    <div class="contract-thumbnail">
      <Icon :src="`${contract.fileType}.svg`" width="58px" height="58px"/>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Icon from '@/components/AppIcon.vue';


const props = defineProps({
  contract: {
    type: Object,
    required: true
  },
});

const printContract = () => {
  console.log(`Печать договора: ${props.title}`);
};

const editContract = () => {
  console.log(`Редактирование договора: ${props.title}`);
};

const deleteContract = () => {
  console.log(`Удаление договора: ${props.title}`);
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.contract{
  &-card {
    padding: 20px;
    border-radius: 10px;
    background-color: $bg-color;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
  }
  &-info {
    flex-grow: 1;
  }
  &-title {
    font-size: 24px;
    font-weight: 700 ;
    color: $text-main-color;
    white-space: nowrap;
  }
  &-status {
    color: #333;
  }
  &-dates {
    font-size: 14px;
    color: $text-grey;
  }
  &-actions {
    margin-top: 10px;
    i {
      cursor: pointer;
      font-size: 18px;
      color: #999;
      transition: color 0.3s ease;
      &:hover {
        color: #333;
      }
    }
  }
  &-thumbnail{
    padding: 30px;
    background-color: #F2F5F8;
    border-radius: 10px;
  }
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background-color: $error-color;
  margin-right: 5px;
  &.active {
    background-color: $sucsess-color;
  }
}
</style>
