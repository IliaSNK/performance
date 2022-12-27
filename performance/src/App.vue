<template>
  <PerformanceList />
</template>

<script>
import PerformanceList from './components/PerformanceList.vue'

export default {
  name: 'App',
  components: {
    PerformanceList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
