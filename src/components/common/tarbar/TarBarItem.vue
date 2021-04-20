<template>
  <div class="tarBarItem" @click="clickBar">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TarBarItem",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  methods: {
    clickBar() {
      if (this.path === this.$route.path) return;
      this.$router.replace(this.path);
      // console.log(this.path,this.$route.path);
    },
  },
  computed: {
    isActive() {
      // console.log(this.path.indexOf(this.$route.path));=-1则两路径一样
      return this.path !== this.$route.path;
    },
    activeStyle() {
      return this.isActive ? { } : {color: "#D81E06" };
    },
  },
};
</script>
<style scoped>
.tarBarItem {
  flex-grow: 1;
  text-align: center;
}
.tarBarItem img {
  height: 24px;
  width: 24px;
}
</style>