<template>
  <div class="topControl">
    <div
      class="tapControlItem"
      v-for="(item, index) in titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.topControl {
  width: 100%;
  height: 40px;
  color: pink;
  display: flex;
  font-size: 18px;
}
.tapControlItem {
  height: 40px;
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.active {
  border-bottom: pink 3px solid;
}
</style>