<template>
  <div id="home">
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <ul>
      <li>1111111</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "../../network/home.js";
import HomeSwiper from "./childComponent/HomeSwiper";
import RecommendView from './childComponent/HomeRecommendView';
import FeatureView from './childComponent/FeatureView';


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  computed: {},
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  method: {},
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.recommend);
    });
  },
};
</script>
<style scoped>
#home {
  color: #fff;
}
.homeNav {
  background-color: pink;
}
</style>