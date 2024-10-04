<template>
  <AppModal v-model="props.isVisible">
    <template #header>
      <h2>Добавить документ</h2>
    </template>

    <template #default>
      <div class="form-group">
        <label>Тип документа:</label>
        <div class="radio-group">
          <label>
            <input type="radio" value="Договор" v-model="documentType" />
            Договор
          </label>
          <label>
            <input type="radio" value="Справка" v-model="documentType" />
            Справка
          </label>
          <label>
            <input type="radio" value="Другое" v-model="documentType" />
            Другое
          </label>
        </div>
      </div>

      <div class="form-group">
        <label for="documentName">Название документа <span class="required">*</span></label>
        <input type="text" v-model="documentName" id="documentName" required />
      </div>

      <div class="form-group">
        <label for="documentNumber">Номер</label>
        <input type="text" v-model="documentNumber" id="documentNumber" />
      </div>

      <div class="form-group">
        <label>Действует с:</label>
        <v-select :options="dates" v-model="activeFrom" />
        <span>по</span>
        <v-select :options="dates" v-model="activeTo" />
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="notifyOnEnd" />
          Оповещать об окончании
        </label>
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="createTaskOnEnd" />
          Создавать задачу при окончании
        </label>
      </div>

      <div class="form-group file-upload">
        <div class="upload-area">
          <p>Загрузить файл</p>
          <input type="file" @change="handleFileUpload" />
          <p>Выберите файл или перетащите его сюда</p>
        </div>
      </div>
    </template>

    <template #footer>
      <button class="primary-btn" @click="addDocument">Добавить документ</button>
      <button class="secondary-btn" @click="closeModal">Отмена</button>
    </template>
  </AppModal>
</template>

<script setup>
import AppModal from '@/components/AppModal.vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { defineProps } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
});

documentType: 'Договор',
documentName: '',
documentNumber: '',
activeFrom: null,
activeTo: null,
notifyOnEnd: false,
createTaskOnEnd: false,
file: null,
dates: ['01.01.2023', '02.01.2023', '03.01.2023']


const closeModal = () => {
  this.$emit('update:isVisible', false);
}
const addDocument = () => {
  if (!this.documentName) {
    alert('Название документа обязательно.');
    return;
  }

  const document = {
    type: this.documentType,
    name: this.documentName,
    number: this.documentNumber,
    activeFrom: this.activeFrom,
    activeTo: this.activeTo,
    notifyOnEnd: this.notifyOnEnd,
    createTaskOnEnd: this.createTaskOnEnd,
    file: this.file
  };

  console.log('Документ добавлен:', document);
  this.closeModal();
}
const handleFileUpload = (event) => {
  this.file = event.target.files[0];
  console.log('Загружен файл:', this.file);
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.radio-group {
  display: flex;
  gap: 10px;
}
.file-upload {
  border: 1px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}
.primary-btn {
  background-color: #f1c40f;
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.secondary-btn {
  background-color: #ccc;
  border: none;
  padding: 10px 20px;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
}
</style>
