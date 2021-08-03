<!-- 侧边栏导航 -->
<template>
  <div class='aside'>
    <el-menu
      class="sidebar-el-menu"
      :collapse="collapse"
      background-color="#242f43"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      :default-active="currentPath"
      unique-opened
      router
    >
      <sideItem :selectRouter='selectRouter' />
      <!-- <template v-for="(item,index) in selectRouter">
        <template v-if="item.children && item.alwaysRoot">
          <el-submenu
            :index="item.path"
            :key="index + 'first'"
          >
            <template slot="title">
              <i :class="item.meta.icon"></i><span slot="title">{{ item.meta.title }}</span>
            </template>
            <template v-for="(subItem,i2) in item.children">
              <el-submenu
                v-if="subItem.children"
                :index="subItem.path"
                :key="i2 + 'subItem'"
              >
                <template slot="title"> <i :class="subItem.meta.icon"></i>{{ subItem.meat.title }}</template>
                {{subItem.children}}
                <el-menu-item
                  v-for="(threeItem,i) in subItem.children"
                  :key="i+ 'three'"
                  :index="threeItem.path"
                >
                  <i :class="threeItem.meta.icon"></i> {{ threeItem.meta.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.path"
                :key="i2 + 'subItem'"
              >
                <i :class="subItem.meta.icon"></i><span slot="title">{{ subItem.meta.title }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :index="item.path"
            :key="index + 'first'"
          >
            <i :class="item.meta.icon"></i><span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </template> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sideItem from './sideIem.vue'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import bus from '@/utils/bus'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { sideItem },
  data () {
    //这里存放数据
    return {
      collapse: false,
      currentPath: null
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(['allRouter']),
    selectRouter () {
      return this.allRouter.filter(item => item.isShowSide)
    },
  },
  //监控data中的数据变化
  watch: {
    $route: {
      handler: function (newValue) {
        this.onRoutes(newValue.path)
      },
      immediate: true
    }
  },
  //方法集合
  methods: {
    onRoutes (path) {
      this.currentPath = (path === '/dashboard' ? '/home' : path)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // console.log(this.selectRouter, 'selectRouter')
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
.aside {
  // width: 248px;
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  background-color: #242f43;
}
.aside::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.aside > ul {
  height: 100%;
}
</style>