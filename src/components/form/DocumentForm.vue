<template>
  <div class="flex align-stretch flex-column gap-4">
    <div class="form-group flex gap-2">
      <label>Тип документа:</label>
      <div class="flex flex-column align-start gap-1">
        <label>
          <input type="radio" value="Договор" v-model="form.documentType" />
          Договор
        </label>
        <label>
          <input type="radio" value="Справка" v-model="form.documentType" />
          Справка
        </label>
        <label>
          <input type="radio" value="Другое" v-model="form.documentType" />
          Другое
        </label>
      </div>
    </div>

    <div class="form-group flex gap-2">
      <Input
        v-model="form.documentName"
        label="Название документа"
        :required="true"
      />
    </div>
    
    <div class="form-group flex gap-2">
      <Input
        v-model="form.documentName"
        label="Номер"
      />
    </div>

    <div class="form-group flex gap-1">
      <label :for="form.activeFrom">Действует с:</label>
      <Datepicker 
        v-model="form.activeFrom"
        lang="RU"        
        :format="'dd.MM.yyyy'"
        :show-calendar-on-focus="false"
        :auto-apply="true" 
      />
      <label :for="form.activeTo">по:</label>
      <Datepicker 
        v-model="form.activeTo" 
        lang="RU"     
        :format="'dd.MM.yyyy'"
        :show-calendar-on-focus="false"
        :auto-apply="true"
      />
    </div>
    <div class="flex flex-column gap-4">
      <div class="form-group flex gap-2">
        <label class="form-control">
          <input type="checkbox" v-model="form.notifyOnEnd" />
          <span>Оповещать об окончании</span>
          
        </label>
      </div>

      <div class="form-group flex gap-2">
        <label class="form-control" >
          <input type="checkbox" v-model="form.createTaskOnEnd" />
          <span>Создавать задачу при окончании</span>
        </label>
      </div>

    </div>

    <div class="form-group file-upload">
      <div class="upload-area">
        <p>Загрузить файл</p>
        <input type="file" @change="handleFileUpload" />
        <p>Выберите файл или перетащите его сюда</p>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import Datepicker from 'vue3-datepicker';
import Input from '@/components/AppInput.vue';
import { ref } from 'vue';

const form = ref({
  documentType: 'Договор',
  documentName: '',
  documentNumber: '',
  activeFrom: null,
  activeTo: null,
  notifyOnEnd: false,
  createTaskOnEnd: false,
  file: null,
});

const handleFileUpload = (event) => {
  form.value.file = event.target.files[0];
  console.log('Загружен файл:', form.value.file);
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