<template>

  <ul class="nav-wrap">
    <li class="nav-item" v-for="(nav,$index) in navList" v-if="navList.length > 0">
      <router-link class="nav-link" :to="nav.url" v-text="nav.text"></router-link>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Slide',
    props: {
      navList: {
        types: Array,
        default: []
      }
    }
  }
</script>

<style lang="less">
@import "./slide.less";
</style>
