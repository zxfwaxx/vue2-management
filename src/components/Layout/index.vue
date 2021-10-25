<!--  -->
<template>
  <div class='wrapper'>
    <Head />
    <Aside />
    <div
      class="content-box"
      :class="{'content-collapse':collapse}"
    >
      <Tage />
      <div class="content">
        <transition
          name="fade-transform"
          mode="out-in"
        >
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Head from "./Head"
import Aside from "./Aside"
import Tage from './tag-blg'
import bus from '@/Utils/bus.js'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Head, Aside, Tage },
  data () {
    //这里存放数据
    return {
      tagsList: [],
      collapse: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    //设置 菜单的展开或关闭
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
    // 设置tags
    bus.$on('seTags', (list) => {
      let includeArr = list.map(item => {
        return item.name
      })
      this.tagsList = includeArr
    })
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
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>