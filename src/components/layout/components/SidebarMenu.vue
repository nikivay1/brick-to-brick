<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Логотип" />
    </div>
    <nav>
      <ul>
        <li>
          <router-link
            to="/home"
            class="menu-item"
            active-class="active"
          >
            <i class="fas fa-home"></i>
            <span>Главная</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/schedule"
            class="menu-item"
            active-class="active"
          >
            <i class="fas fa-calendar-alt"></i>
            <span>Расписание</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/students"
            class="menu-item"
            active-class="active"
          >
            <i class="fas fa-user-graduate"></i>
            <span>Ученики</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/teachers"
            class="menu-item"
            active-class="active"
          >
            <i class="fas fa-chalkboard-teacher"></i>
            <span>Преподаватели</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/lessons"
            class="menu-item"
            active-class="active"
          >
            <i class="fas fa-book"></i>
            <span>Занятия</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.sidebar {
  width: $sidebar-width;
  background-color: $primary-color;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
}
.logo {
  width: 100%;
  img {
    width: auto;
    padding: $offset-16 $offset-20;
  }
} 
nav {
  width: 100%;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  a {
    color: $bg-color;
    text-decoration: unset;
    display: flex;
    flex-direction: column;
    padding:$offset-20 0;
    span {
      font: 400 18px;
      text-align: center;
    }
  }
}

.menu-item {
  text-decoration: none;
  color: $bg-color;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}
.menu-item i {
  font-size: 18px;
  margin-bottom: 5px;
}
.menu-item span {
  font: 400 18px;
}
.menu-item.active {
  background-color: $primary-hover-color;
}
.menu-item:hover {
  background-color: $primary-hover-color;
}
</style>
