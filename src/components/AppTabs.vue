<template>
  <div class="tabs">
    <!-- Отображаем вкладки -->
    <div class="tab-titles">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'active-tab': activeTab === tab }"
        @click="selectTab(tab)"
      >
        {{ tab.title }}
      </span>
    </div>

    <!-- Слот для контента выбранной вкладки -->
    <slot :name="activeTab.name"></slot>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => []
  }
});
const activeTab =  ref(props.tabs[0] || null);

const selectTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.tabs {
  text-align: center;
}
.tab-titles {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  span {
    cursor: pointer;
    padding: 10px 20px;
    color: $text-main-color;
    border-bottom: 2px solid transparent;
    font-weight: bold;
    &.active-tab {
      color: $primary-color;
      border-bottom: 2px solid $primary-color;
    }
  }
}
</style>
