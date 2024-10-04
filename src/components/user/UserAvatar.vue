<template>
  <div class="user-avatar">
    <img :src="props.avatarUrl" alt="Avatar" class="avatar" />
    <div class="user-info flex flex-column justify-space-between">
      <div class="user-info_name">
        <h2>{{ props.name }}</h2>

        <i v-if="gender === 'male'" class="fa-solid fa-person gender-icon male"></i>
        <i v-else-if="gender === 'female'" class="fa-solid fa-person-dress gender-icon female"></i>
      </div>
      <div class="connect">
        <div class="messenger-icons">
          <a href="#">
            <img src="@/assets/icon/whatsapp.png" alt="whatsapp" />
          </a>          
          <a href="#">
            <img src="@/assets/icon/viber.png" alt="viber" />
          </a>
          <a href="#">
            <img src="@/assets/icon/telegram.png" alt="telegram" />
          </a>
        </div>
        <a href="#" class="comments-link">Комментарии</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.user-avatar {
  display: flex;
  align-items: center;
}
.avatar {
  width: $user-avatar-width;
  height: $user-avatar-width;
  border-radius: 50%;
  margin-right: 30px;
}
.user-info {
  height: 100%;
  &_name{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  h2 {
    font-size: 36px;
    color: $primary-color;
    -webkit-text-stroke: 1px black;
    text-wrap: nowrap;
    margin: 0;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
.gender-icon{
  font-size: 25px;
  &.female{
    color: #ff93da;
  }
  &.male{
    color: #007bff;
  }
}
.messenger-icons{
  display: flex;
  gap: 10px;
  a {
    width: 25px;
    height: 25px;
  }
}
.connect{
  display: flex;
  gap: 30px;
}
.comments-link {
  color: $primary-color;
  margin-top: 5px;
}
</style>
