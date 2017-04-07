<template>
  <div class="v-input">
    <!--
      props:
        type  输入框类型  text | password | textarea
        value: 输入值
        size: 输入框大小  small | normal | large
        placeholder: 提示信息
        maxlength: 最大长度
        minlength: 最小长度
        disabled: 是否可见
        readonly: 是否只读
        name: name属性
        number: 是否是数字类型
        autosize: textarea时  是否宽度可变
        rows: textarea 行数
        icon:  icon图标
    -->
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  name: 'VInput',
  props: {
    type: {
    }
  }
}
</script>

<style lang="less">
@import "v-input.less";
</style>
