<template>
  <div class="header">
    <a href="javascript:;" class="logo">Vue组件</a>
    <ul class="menu-wrap">
      <li class="menu-item">
        <router-link class="menu-link" to="/">表单组件</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  name: 'Main'
}
</script>

<style style="less">
  .header{
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    height: 80px;
    background-color: #999;
    align-self: center;
  }
  .logo{
    width: 100px;
    display: inline-block;
    font-size: 14px;
    text-align: center;
    background-color: rebeccapurple;
    line-height: 80px;
    color: #fff;
  }
  .menu-wrap{
    flex: 1;
    height: 100%;
  }
  .menu-item{
    margin-left: 10px;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    height: 100%;

  }
  .menu-link{
    color: #fff;
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    line-height: 80px;
    height: 80px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .menu-link.active{
    border-bottom: 4px solid green;
  }
</style>
