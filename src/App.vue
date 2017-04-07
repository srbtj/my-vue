<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    components: {
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
</style>
