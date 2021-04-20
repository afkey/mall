<template>
  <div id="app">
    <router-view></router-view>
    <tar-bar-main></tar-bar-main>
  </div>
</template>

<script>
import TarBarMain from './components/context/TarBarMain';
export default {
  components: {
    TarBarMain,
  },
};
</script>
<style>
  @import './assets/css/base.css'
</style>