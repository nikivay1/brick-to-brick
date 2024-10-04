<template>
  <div class="user-profile flex justify-space-between">
    <UserAvatar
      :name="name"
      :avatarUrl="user.picture.large"
      :gender="user.gender"
    />
    <UserContactInfo
      :phone="user.phone"
      :birthDate="dob"
      :age="user.dob.age"
      :status="user.status"
      :isActive="user.isActive"
      :parentPhone="user.cell"
      :address="address"
    />
    <UserActionButtons @edit="editProfile" @delete="deleteProfile" />
  </div>
</template>

<script setup>
import moment from 'moment';
import { computed, defineProps } from 'vue';

import UserAvatar from '@components/user/UserAvatar.vue';
import UserContactInfo from '@components/user/UserContactInfo.vue';
import UserActionButtons from '@components/user/UserActionButtons.vue';

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const address = computed(() => `г.${props.user.location.city}, ул.${props.user.location.street.name} ${props.user.location.street.number}, кв.${props.user.location.postcode}`)
const dob = computed(() => moment(props.user.dob.date).format('DD.MM.YYYY'))
const name = computed(() => `${props.user.name.first} ${props.user.name.last}`)

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
