<!-- 面包屑 -->
<template>
  <div class='bread-crumb'>
    <el-breadcrumb
      separator="/"
      class="brands-zdi"
    >
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-for="item in breadsArr"
          :key="item.path"
        >
          <span
            v-if='item.isTit'
            style="color:#fff"
          >{{item.title}}</span>
          <a
            style="color:#0BF0CA"
            v-else
            @click.prevent="handleLink(item)"
          >{{item.title}}</a>
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
  computed: {
  },
  //监控data中的数据变化
  watch: {
    $route: {
      handler: function (route) {
        console.log(route, '(route')
        let ars
        if (route.matched[0].meta.title === '系统首页') {
          ars = [{ title: '首页', isTit: true, path: '/' }, { title: route.matched[0].meta.title, isTit: true, path: route.matched[0].path }]
        } else {
          ars = [{ title: '首页', isTit: true, path: '/' }, { title: route.matched[0].meta.title, isTit: true, path: route.matched[0].path }]
        }
        this.breadsArr = ars
      },
      //, { title: route.matched[1].meta.title, isTit: false, path: route.matched[1].path }
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

  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all 0.5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
}
</style>