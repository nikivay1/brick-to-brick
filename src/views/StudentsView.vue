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
      <UserProfile v-if="student" :user="student"/>
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


const store = useStore();

onMounted(async () => {
  await store.dispatch('students/fetchStudents');
});

const student = computed(() => store.getters['students/students']);
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
