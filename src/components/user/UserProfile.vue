<template>
  <div class="user-profile flex justify-space-between">
    <UserAvatar
      :name="user.name"
      :avatarUrl="user.picture"
      :gender="user.gender"
    />
    <UserContactInfo
      :phone="user.phone"
      :birthDate="user.dob"
      :age="user.age"
      :status="user.status"
      :isActive="user.status === 'active'"
      :parentPhone="user.parentPhone"
      :address="user.address"
    />
    <UserActionButtons @edit="editProfile" @delete="deleteProfile" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

import UserAvatar from '@components/user/UserAvatar.vue';
import UserContactInfo from '@components/user/UserContactInfo.vue';
import UserActionButtons from '@components/user/UserActionButtons.vue';

defineProps({
  user: {
    type: Object,
    required: true
  }
});

const editProfile = () => {
  console.log('Редактировать профиль');
};

const deleteProfile = () => {
  console.log('Удалить профиль');
};
</script>

<style scoped>
.user-profile {
  align-items: stretch;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
