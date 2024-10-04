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
  </div>
</template>

<script setup>
import ContractCard from '@/components/card/ContractCard.vue';
const contracts =  [
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
]
</script>

<style scoped lang="scss">
.contracts-list {    
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
