<template>
  <div class="contracts-list gap-4">
    <ContractCard
      v-for="contract in contracts"
      :key="contract.id"
      :title="contract.title"
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
import { ref } from 'vue';

const contracts =  ref([
  {
    id: 1,
    title: 'Договор №001',
    status: 'active',
    startDate: '04.07.2021',
    endDate: '04.07.2022',
    thumbnailUrl: 'https://via.placeholder.com/100x100?text=PDF'
  },
  {
    id: 2,
    title: 'Договор №002',
    status: 'cancelled',
    startDate: '04.07.2021',
    endDate: '04.07.2022',
    thumbnailUrl: 'https://via.placeholder.com/100x100?text=JPG'
  },
  {
    id: 3,
    title: 'Справка',
    status: 'active',
    startDate: '04.07.2021',
    endDate: '04.07.2022',
    thumbnailUrl: 'https://via.placeholder.com/100x100?text=DOC'
  },
  {
    id: 4,
    title: 'Анкета',
    status: 'active',
    startDate: '04.07.2021',
    endDate: '',
    thumbnailUrl: 'https://via.placeholder.com/100x100?text=XLS'
  }
]);
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
