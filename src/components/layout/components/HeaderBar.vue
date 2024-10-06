<template>
  <header class="header-bar">
    <div class="breadcrumbs">
      <span>Главная</span> / <span>Ученики</span> / <span>Документы</span>
    </div>
    <div class="user-info">
      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User Avatar" class="user-avatar" />
      <span class="user-name">Name_user</span>
      <i class="fas fa-cog settings-icon"></i>
      <i class="fas fa-sign-out-alt logout-icon"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 $offset-20;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: $header-width;
  position: fixed;
  top: 0;
  left: $sidebar-width;
  right: 0;
  z-index: 10;
}
.breadcrumbs {
  font-size: 14px;
  color: gray;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-avatar {
  width: $offset-40;
  height: $offset-40;
  border-radius: 50%;
  margin-right: 10px;
}
.user-name {
  margin-right: $offset-20;
}
.settings-icon, .logout-icon {
  font-size: 18px;
  margin-left: $offset-20;
  cursor: pointer;
  color: gray;
}
.settings-icon:hover, .logout-icon:hover {
  color: black;
}
</style>
