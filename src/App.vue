<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
 import Header from './components/header/Header.vue';
 import Footer from './components/footer/Footer.vue';
  export default {
    name: 'app',
    components: {
      'v-header': Header,
      'v-footer': Footer
    }
  }
</script>

<style lang="less">
  html,body,ul{
    margin: 0;
    padding: 0;
  }
  #app {
    display: flex;
  }

  .container{
    position: relative;
    top: 80px;
    bottom: 80px;
    width: 100%;
    min-height: 100%;
  }

</style>
