<template>
  <div class="contracts-list gap-4">
    <ContractCard
      v-for="contract in contracts"
      :key="contract.id"
      :title="contract.documentName"
      :status="contract.status"
      :startDate="contract.startDate"
      :endDate="contract.endDate"
      :thumbnailUrl="contract.thumbnailUrl"
    />

    <AddDocumentButton @click="openModal" />
  </div>

  <AppModal v-model="isModalVisible" @close-modal="closeModal" class="document-modal">
    <template #title>
      Добавить документ
    </template> 
    <template #default>
      <DocumentForm />
    </template>
    <template #footer>
      <div class="flex justify-center gap-2">
        <button class="primary-btn" @click="addDocument">Добавить документ</button>
        <button class="secondary-btn" @click="closeModal">Отмена</button>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import ContractCard from '@/components/card/ContractCard.vue';
import AppModal from '@/components/AppModal.vue';
import DocumentForm from '@/components/form/DocumentForm.vue';
import AddDocumentButton from '@/components/card/AddContractButton.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';


const store = useStore();
onMounted(async () => {
  await store.dispatch('students/fetchStudentsContracts');
});
const contracts = computed(() => store.getters['students/contracts']);

const isModalVisible = ref(false);
const openModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.contracts-list {    
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: 1fr;
}
.primary-btn {
  background-color: $button-primary;
}
.secondary-btn {
  background-color: $button-grey;
}
.primary-btn, .secondary-btn {
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 800;
  color: $bg-color;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}
</style>
