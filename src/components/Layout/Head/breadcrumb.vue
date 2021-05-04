<!-- 面包屑 -->
<template>
  <div class='bread-crumb'>
    <el-breadcrumb
      separator="/"
      class="brands-zdi"
    >
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      <transition-group name="flip-list">
        <el-breadcrumb-item
          v-for="(item,index) in breadsArr"
          :key="index+'breads'"
        >
          <span
            v-if='item.isTit'
            style="color:#fff"
          >{{item.title}}</span>
          <span
            style="color:#0BF0CA"
            v-else
            @click.prevent="handleLink(item)"
          >{{item.title}}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      breadsArr: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route: {
      handler: function (route) {
        this.breadsArr = []
        console.log(route.matched[0].meta.title, route.matched[1].meta.title)
        if (route.matched[0].meta.title === '系统首页') {
          this.breadsArr = [{ title: route.matched[0].meta.title, isTit: true }]
          return
        }
        this.breadsArr = [{ title: route.matched[0].meta.title, isTit: true }, { title: route.matched[1].meta.title, isTit: false }]
      },
      immediate: true
    }
  },
  //方法集合
  methods: {
    handleLink () {

    },

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
.bread-crumb {
  //  float: left;
  height: 100%;
  margin-left: 49px;
  padding: 0 20px;
  font-size: 18px;
  line-height: 70px;
  // background-color: rgba(205, 204, 331,.2);
  .brands-zdi {
    display: inline-block;
  }
  .flip-list-move {
    transition: transform 1s;
  }
}
</style>