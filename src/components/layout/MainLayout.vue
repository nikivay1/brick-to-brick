<template>
  <div class="layout">
    <!-- Меню навигации -->
    <SidebarMenu />

    <!-- Шапка сайта -->
    <HeaderBar />

    <!-- Основное содержимое -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SidebarMenu from '@/components/layout/components/SidebarMenu.vue';
import HeaderBar from '@/components/layout/components/HeaderBar.vue';

</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
main {
  flex: 1;
  background-color: #f2f5f8;
  margin-left: $sidebar-width;
  margin-top: $header-width;
  overflow-y: auto;
  height: calc(100vh - $header-width);
  position: relative;
}
</style>
