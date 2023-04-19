<!--  -->
<template>
  <div class='side-items'>
    <template v-for="(item,index) in selectRouter">
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
              <template slot="title">
                <i :class="subItem.meta.icon"></i>
                {{ subItem.meta.title }}
              </template>
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
              :key="i2 + 'subItems'"
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
    </template>
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

    };
  },
  props: {
    selectRouter: {
      type: Array,
      default: () => []
    }
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
    console.log(this.selectRouter)
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
</style>