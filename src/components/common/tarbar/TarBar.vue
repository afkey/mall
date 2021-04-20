<template>
  <div class="tarbar">
      <slot></slot>
  </div>
</template>

<script>
import TarBarItem from './TarBarItem'
export default {
  name: "TarBar",
  components:{
      TarBarItem,
  }
};
</script>
<style scoped>
.tarbar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>