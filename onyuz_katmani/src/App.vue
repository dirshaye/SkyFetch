<template>
  <div id="app">
      <Weather />
  </div>
</template>

<script>
import Weather from './components/WeatherComponent.vue';

export default {
  components: {
      Weather,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
</style>
