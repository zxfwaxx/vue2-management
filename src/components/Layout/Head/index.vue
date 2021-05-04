<!-- 头部导航 -->
<template>
  <div class='head'>
    <div
      class="collapse-btn"
      @click="collapseChage"
    >
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <bread-crumb class="berads" />
    <div class="head-right" @click="logout">
      退出登陆
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import bus from '@/utils/bus.js'
import breadCrumb from './breadcrumb';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {breadCrumb},
  data () {
    //这里存放数据
    return {
      collapse: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 侧边栏折叠
    collapseChage () {
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse);
    },
    logout(){
      this.$router.push('/login')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.head {
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  color: #fff;
  font-size: 20px;
  background-color: #242f42;
  clear: both;
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .logo {
    float: left;
    line-height: 70px;
  }
  .head-right {
    float: right;
    font-size: 18px;
    line-height: 70px;
    padding-right: 50px;
    cursor: pointer;
  }
  .berads{
    float: left;
  }
}
</style>