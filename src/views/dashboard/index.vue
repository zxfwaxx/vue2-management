<!--  -->
<template>
  <div class='dashed'>
    我是首页
<<<<<<< HEAD
    <el-input
      v-model.number="con"
      placeholder="请输入内容"
    ></el-input>
    {{ typeof con}}
    {{con}}
    <comA
      a='123'
      b='456'
      @coma="coma"
      @comb="comb"
    />
    <div class="record">
      <h1>{{tipMsg}}</h1>
      <button @click="onStartVoice">开始</button>
      <button @click="onEndVoice">结束</button>
      <button @click="onPlayAudio">播放</button>
      <div
        class="record-play"
        v-show="isFinished"
      >
        <h2>Current voice player is:</h2>
        <audio
          id="audioVoice"
          controls
          autoplay
        ></audio>
      </div>
    </div>
=======
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD
import comA from './comA.vue'
import Record from './js/b';
=======
>>>>>>> master
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {  },
  data () {
    //这里存放数据
    return {
      con: 'ssss',
      isVoice: false,
      isFinished: false,
      tipMsg: '录音',
      audio: "",
      recorder: new Record()
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  mounted () {
    if (window.history && window.history.pushState) {
      // 向历史记录中插入了当前页
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.goBack, false);
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.goBack, false);
  },
  //方法集合
  methods: {
    goBack () {
      // console.log("点击了浏览器的返回按钮");
      console.log(1222)
      history.pushState(null, null, document.URL);
    },
    chss () {
      console.log(this.con)
    },
    coma (val) {
      console.log(val, '1111')
    },
    comb (val) {
      console.log(val, '222')
    },
    // 开始录音
    onStartVoice () {
      this.onStopAudio()
      this.isFinished = false;
      this.recorder.startRecord({
        success: res => {
          this.isVoice = true
          console.log(res, '22')
        },
        error: e => {
          this.isVoice = false
          this.$toast(e)
        }
      });
    },

    // 结束录音
    onEndVoice () {
      this.isFinished = false;
      this.recorder.stopRecord({
        success: res => {
          this.isVoice = false
          //此处可以获取音频源文件(res)，用于上传等操作
          console.log('音频源文件', res)
        },
        error: () => {
          this.isVoice = false
        }
      });
    },

    // 播放录音
    onPlayAudio () {
      this.isVoice = false
      this.isFinished = true;
      this.audio = document.getElementById("audioVoice");
      this.recorder.play(this.audio);
    },

    // 停止播放录音
    onStopAudio () {
      this.recorder.clear(this.audio);
    }

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
/* @import url(); 引入公共css类 */
.dashed {
  height: 2000px;
}
</style>