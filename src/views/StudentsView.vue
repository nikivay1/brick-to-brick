<template>
  <section id="students">
    <div v-if="isLoading">
      <Spinner :isVisible="isLoading" />
    </div>

    <!-- если произошла ошибка во время загрузки -->
    <div v-else-if="hasError">
      <p class="error">{{ errorMessage }}</p>
    </div>

    <div v-else>
      <UserProfile v-if="randomStudent" :user="randomStudent"/>
      <ContractList />
    </div>
  </section>
</template>

<script setup>
import UserProfile from '@/components/user/UserProfile.vue';
import ContractList from '@/components/card/ContractList.vue';
import Spinner from '@/components/LoadingSpinner.vue';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';


const store = useStore();

const randomStudent = ref(null);

onMounted(async () => {
  await store.dispatch('students/fetchStudents');
  if (students.value.length > 0) {
    randomStudent.value = students.value[Math.floor(Math.random() * students.value.length)];
  }
});

const students = computed(() => store.getters['students/students']);
const isLoading = computed(() => store.getters['students/isLoading']);
const hasError = computed(() => store.getters['students/hasError']);
const errorMessage = computed(() => store.getters['students/errorMessage']);
</script>

<style lang="scss" scoped>
#students {
  margin: 20px 90px;
}
.error {
  color: red;
}
</style>
