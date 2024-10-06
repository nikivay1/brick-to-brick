<template>
  <div class="filters flex justify-space-between align-center">
    <div class="flex gap-4">
      <div class="filter-item flex flex-column align-start ">
        <label for="docType" class="filter-label">Тип документа</label>
        <div class="custom-select">
          <select v-model="filters.docType" id="docType" class="styled-select" @change="getContracts">
            <option value="null">Не выбрано</option>
            <option v-for="option in documentTypes" :key="option.value" :value="option.value">
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="filter-item flex flex-column align-start">
        <label for="status" class="filter-label">Статус</label>
        <div class="custom-select">
          <select v-model="filters.status" id="status" class="styled-select" @change="getContracts">
            <option value="null">Не выбрано</option>
            <option v-for="option in statuses" :key="option.value" :value="option.value">
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="filter-item flex flex-column align-start">
        <label for="sortBy" class="filter-label">Сортировать по</label>
        <div class="custom-select">
          <select v-model="filters.sortBy" id="sortBy" class="styled-select" @change="getContracts">
            <option v-for="option in sortOptions" :key="option.value" :value="option.value">
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <button class="add-document-button" @click="openModal">
      Добавить документ
    </button>
  </div>

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
  await getContracts();
});
const contracts = computed(() => store.getters['students/contracts']);

const filters= ref({
  docType: null,
  status: null,
  sortBy: 'startDate',
});
const documentTypes = [{
  name: 'Договор',
  value: 'contract'
},{
  name: 'Справка',
  value: 'synopsis'
},{
  name: 'Договор',
  value: 'other'
}];
const statuses = [{
  name: 'Заключен',
  value: 'active'
},{
  name: 'Расторгнут',
  value: 'cancelled'
}];
const sortOptions = [{
  name: 'Дата',
  value: 'startDate'
},{
  name: 'Название',
  value: 'name'
},{
  name: 'Статус',
  value: 'status'
}];
const getContracts = async () => {
  await store.dispatch('students/fetchStudentsContracts', filters.value);
};

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
.filters{
  margin-bottom: 10px;
}
.filter-item {
  display: flex;
  flex-direction: column;
}
.filter-label {
  color: $text-grey;
  font-size: 14px;
  margin-bottom: 5px;
}
.custom-select {
  position: relative;
  display: inline-block;
  width: 150px;
}
.styled-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 5px 0;
  font-size: 16px;
  font-weight: bold;
  color: $primary-color;
  border: none;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
}
.styled-select option {
  color: $text-main-color;
  font-size: 16px;
  padding: 5px 0;
}
.styled-select::after {
  content: '▾';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.styled-select:focus {
  outline: none;
}
.add-document-button {
  background-color: $button-primary;
  color: $bg-color;
  text-transform: uppercase;
  font-weight: 800;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
