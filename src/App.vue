<template>
  <router-view />
</template>

<script>
import '@/styles/root.scss';

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700;800&display=swap');

body, html, #app, button {
  margin: 0;
  padding: 0;
  font-family: 'Alegreya Sans', sans-serif;
  height: 100%;
}
</style>
