<template>
     <tar-bar>
      <tar-bar-item path="/Home">
        <img slot="item-icon" src="~@/assets/img/tarbar/home.png" alt="" />
        <img slot="item-icon-active" src="~@/assets/img/tarbar/home-active.png" alt="" />
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/Category">
        <img slot="item-icon" src="~@/assets/img/tarbar/classify.png" alt="" />
        <img slot="item-icon-active" src="~@/assets/img/tarbar/classify-active.png" alt="" />
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/Cart">
        <img slot="item-icon" src="~@/assets/img/tarbar/cart.png" alt="" />
        <img slot="item-icon-active" src="~@/assets/img/tarbar/cart-active.png" alt="" />
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/Profile">
        <img slot="item-icon" src="~@/assets/img/tarbar/me.png" alt="" />
        <img slot="item-icon-active" src="~@/assets/img/tarbar/me-active.png" alt="" />
        <div slot="item-text">首页</div>
      </tar-bar-item>
    </tar-bar>
</template>

<script>
import TarBar from '../common/tarbar/TarBar'
import TarBarItem from '../common/tarbar/TarBarItem'
export default {
    name:"TarBarMain",
    components:{
        TarBar,
        TarBarItem,
    }
}
</script>