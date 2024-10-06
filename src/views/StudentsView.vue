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
      <Tabs :tabs="tabs">
        <!-- Вкладка Занятия -->
        <template v-slot:lessons>
          <div>Контент для вкладки Занятия</div>
        </template>

        <!-- Вкладка Расписание -->
        <template v-slot:schedule>
          <div>Контент для вкладки Расписание</div>
        </template>

        <!-- Вкладка Платежи -->
        <template v-slot:payments>
          <div>Контент для вкладки Платежи</div>
        </template>

        <!-- Вкладка Посещения -->
        <template v-slot:attendance>
          <div>Контент для вкладки Посещения</div>
        </template>

        <!-- Вкладка Документы -->
        <template v-slot:documents>
          <ContractList />
        </template>

        <!-- Вкладка Задачи -->
        <template v-slot:tasks>
          <div>Контент для вкладки Задачи</div>
        </template>
      </Tabs>
    </div>
  </section>
</template>

<script setup>
import UserProfile from '@/components/user/UserProfile.vue';
import ContractList from '@/components/card/ContractList.vue';
import Spinner from '@/components/LoadingSpinner.vue';
import Tabs from '@/components/AppTabs.vue';
import { onMounted, computed, ref} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const tabs = ref([
  { name: 'lessons', title: 'Занятия' },
  { name: 'schedule', title: 'Расписание' },
  { name: 'payments', title: 'Платежи' },
  { name: 'attendance', title: 'Посещения' },
  { name: 'documents', title: 'Документы' },
  { name: 'tasks', title: 'Задачи' }
]);

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
