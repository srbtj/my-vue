<template>
  <div class="form-wrap">
    <v-slide :navList="navList"></v-slide>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slide from '../slide/Slide.vue';
    export default{
      name: 'MyForm',
      components: {
        'v-slide': Slide
      },
      data() {
        return {
          navList: [
            {
              'icon': '',
              'url': '/myForm/input',
              'text': 'Input组件'
            },
            {
              'icon': '',
              'url': '/myForm/radio',
              'text': 'Radio组件'
            }
          ]
        }
      }
    }
</script>

<style lang="less">
.content{
  position: absolute;
  left: 100px;
  right: 0;
  top: 0;
  overflow-y: auto;
}
</style>
