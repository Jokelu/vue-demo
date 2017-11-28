<template>
  <div id="head_top">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <div class="head_back" v-if="goBack" @click="$router.go(-1)">
      <img src="./return.png" alt="">
    </div>
    <div class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </div>
    <div class="head_login right" @click="loginup">
      <img src="./person.png" alt="">
    </div>
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {
      goBack: '',
      headTitle: '',
      signinUp: ''
    },
    data() {
      return {}
    },
    methods: {
      loginup() {
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../style/mixin.less";

  #head_top {
    background-color: @blue;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    .wh(100%, 2rem);
    display: flex;
    align-items: center;
    .head_back {
      .wh(1.2rem, 1.2rem);
      margin-left: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .head_login {
      .wh(1.2rem, 1.2rem);
      img {
        .wh(100%, 100%)
      }
    }
  }
</style>
