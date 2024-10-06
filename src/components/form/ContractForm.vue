<template>
  <div class="flex align-stretch flex-column gap-4">
    <div class="form-group flex gap-2">
      <label>Тип документа:</label>
      <div class="flex flex-column align-start gap-1">
        <label>
          <input type="radio" value="contract" v-model="model.documentType" />
          Договор
        </label>
        <label>
          <input type="radio" value="synopsis" v-model="model.documentType" />
          Справка
        </label>
        <label>
          <input type="radio" value="other" v-model="model.documentType" />
          Другое
        </label>
      </div>
    </div>
    <div class="form-group flex gap-2">
      <Input
        v-model="model.documentName"
        label="Название документа"
        :required="true"
      />
    </div>
    <div class="form-group flex gap-2">
      <Input
        v-model="model.documentName"
        label="Номер"
      />
    </div>
    <div class="form-group flex gap-1">
      <label :for="model.startDate">Действует с:</label>
      <Datepicker 
        v-model="model.startDate"
        lang="RU"        
        :format="'dd.MM.yyyy'"
        :show-calendar-on-focus="false"
        :auto-apply="true" 
      />
      <label :for="model.endDate">по:</label>
      <Datepicker 
        v-model="model.endDate" 
        lang="RU"     
        :format="'dd.MM.yyyy'"
        :show-calendar-on-focus="false"
        :auto-apply="true"
      />
    </div>
    <div class="flex flex-column gap-4">
      <div class="form-group flex gap-2">
        <label class="form-control">
          <input type="checkbox" v-model="model.notifyOnEnd" />
          <span>Оповещать об окончании</span>
          
        </label>
      </div>
      <div class="form-group flex gap-2">
        <label class="form-control" >
          <input type="checkbox" v-model="model.createTaskOnEnd" />
          <span>Создавать задачу при окончании</span>
        </label>
      </div>
    </div>
    <div class="form-group file-upload"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
      @click="triggerFileInput"
    >
      <div class="flex flex-column">
        <Icon src="plus.svg" large/>
        <span class="file-upload_text">
          Загрузить файл
        </span>
      </div>
      <input
        type="file"
        ref="fileInput"
        style="display: none"
        @change="handleFileUpload"
      />
      <p v-if="!model.file">{{ dropZoneMessage }}</p>
      <p v-if="model.file">Загружен файл: {{ model.file.name }}</p>
    </div>
  </div>
  
</template>

<script setup>
import Datepicker from 'vue3-datepicker';
import Input from '@/components/AppInput.vue';
import Icon from '@/components/AppIcon.vue';
import { ref, defineModel} from 'vue';


const model = defineModel();
const fileInput = ref(null);

const dropZoneMessage = ref('Выберите файл или перетащите его сюда');

// Обработка события перетаскивания файла над областью
const handleDragOver = (event) => {
  event.dataTransfer.dropEffect = 'copy';
  dropZoneMessage.value = 'Отпустите файл для загрузки';
};
// Обработка события ухода файла из области
const handleDragLeave = () => {
  dropZoneMessage.value = 'Перетащите файл сюда или выберите файл вручную';
};
// Обработка события "drop" - файл перетянут в область
const handleDrop = (event) => {
  const droppedFiles = event.dataTransfer.files;
  if (droppedFiles.length) {
    model.value.file = droppedFiles[0];
    dropZoneMessage.value = `Файл "${model.value.file.name}" загружен`;
  }
};
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    model.value.file = file;
    uploadFile(file);
  }
};
const uploadFile = (file) => {
  console.log('Загруженный файл:', file);
  const formData = new FormData();
  formData.append('file', file);
};
const triggerFileInput = () => {
  fileInput.value.click();
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.form-group {
  color: $text-main-color;
  padding: $offset-4;
  font-size: 18px;
  .required {
    color: $error-color;
  }
}
.radio-group {
  display: flex;
  gap: 10px;
}
.file-upload {
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #F2F5F8;
  border-radius: 10px;
  border: 1px solid #B9C2C9;
  margin-bottom: 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 18px;
  color: #86939c;
  &_text{
    color: $text-main-color;
    font-size: 18px;
  }
}
.form-control {
  font-size: 2rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  input{
    margin: unset;
  }
  span {
    font-size: 18px;
  }
}
</style>