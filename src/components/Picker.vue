<template>
  <div class="picker">
    <!-- mask -->
    <div class="mask"></div>
    <!-- 弹框 -->
    <div class="pick-wrap" v-show="show">
      <div class="pick-btn">
        <button @click="cancel">取消</button>
        <button @click="confirm">确定</button>
      </div>
      <div class="pick-select">
        <div class="middle-line">
          <div v-for="($index,slot) in slots"
               class="slot-wrap"
                :style="{ transform: 'translate3D(0,'+ allOptions[$index].top+'px,0)'}">

            <div class="pick-item"
              v-for="(_index,val) in slot.value"
                 v-text="val[slot.showfield]"
                 :class="selected: -allOptions[$index].changeSelect == _index"
            ></div>

            <div class="touch-area"
              v-for="($index,slot) in slots"
                 @touchstart.prevent = 'touchstartHandle($event,$index)'
                 @touchmove.prevent = 'touchmoveHandle($event,$index)'
                 @touchend = 'touchendHandle($event,$index)'
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Picker',
    data() {
      return {
        singerHeight: 60,
        allOptions: []
      }
    },
    computed: {

    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      islinkage: {
        type: Boolean,
        default: true
      },
      slots: {
        type: Array,
        default: []
      }
    },
    methods: {
      touchstartHandle(e,index){
        let allOptions = this.allOptions;
        allOptions.initTop = allOptions.top;
        allOptions.startPageY = e.touches[0].pageY;
      },
      touchmoveHandle(e,index){
        let nowPageY = e.targetTouches[0].pageY;
        let dis = nowPageY - this.allOptions[index].startPageY;

        this.allOptions[index].top = this.allOptions[index].initTop + dis;
        if(nowPageY > document.documentElement.clientHeight){
          this.touchendHandle(e,index);
        }
      },
      touchendHandle(e,index){
        this.handlePosition(e,index);
      },
      handlePosition(e,i){

      }
    }
  }
</script>

<style>
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
  }

  .pick-wrap{
    position: fixed;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
  }

  .pick-btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    font-size: 14px;
    height: 24px;
  }
  .pick-btn button{
    flex: 1;
    font-size: 14px;
    text-align: center;
    color: #4ab4ed;
    height: 24px;
    line-height: 24px;
    border: none;
  }

  .pick-select{
    display: flex;
    display: -webkit-flex;
    position: relative;
    height: 300px;
    overflow: hidden;
  }

  .pick-select .touch-area{
    flex: 1;
    height:  100%;
  }

  .pick-select .middle-line{
    display: flex;
    display: -webkit-flex;
    position: absolute;
    top: 50%;
    -webkit-transform: translate3D(0,50%,0);
    transform: translate3D(0,50%,0);
    height: 60px;
    left: 0;
    width: 100%;
    background: #f0f0f0;
    pointer-events: none;
    z-index: -1;
  }

  .pick-select .pick-item{
    height: 60px;
    font-size: 14px;
    text-align: center;
    line-height: 60px;
  }

  .pick-select.selected{
    color: #4ab7ed;
  }

  .pick-select .slot-wrap{
    -webkit-transition: transform .2s ease-out;
    transition: transform .2s ease-out;
    flex: 1;
  }
</style>
