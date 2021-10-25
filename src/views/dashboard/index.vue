<!--  -->
<template>
  <div class='dashed'>
    我是首页
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

  </div>
</template>

<script>
import comA from './comA.vue'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { comA },
  data () {
    //这里存放数据
    return {
      con: 'ssss'
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