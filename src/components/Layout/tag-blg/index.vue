<!--  -->
<template>
  <div class='tags'>
    <ul>
      <li
        class="tags-li"
        v-for="(item,index) in tagsList"
        :class="{'active': isActive(item.path)}"
        :key="index"
      >
        <router-link
          :to="item.path"
          class="tags-li-title"
        >
          {{item.title}}
        </router-link>
        <span
          class="tags-li-icon"
          @click="closeTags(index)"
        ><i class="el-icon-close"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import bus from '@/utils/bus.js'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      tagsList: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route (newValue, oldValue) {
      this.setTags(newValue, oldValue)
    }
  },
  //方法集合
  methods: {
    isActive (path) {
      return path === this.$route.fullPath
    },
    closeTags (index) {
      if (this.tagsList.length > 1) {
        this.tagsList.splice(index, 1)
      }
    },
    setTags (newroute) {
      const isRouter = this.tagsList.some((val) => {
        return val.path === newroute.fullPath
      })
      if (!isRouter) {
        this.tagsList.push({
          title: newroute.meta.title,
          path: newroute.fullPath,
          name: newroute.name
        })
      }
      bus.$emit('seTags', this.tagsList)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.setTags(this.$route);
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
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  -webkit-box-shadow: 0 5px 10px #ddd;
  box-shadow: 0 5px 10px #ddd;
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    margin-left: 20px;
  }

  .tags-li {
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
  }

  .tags-li:not(.active):hover {
    background: #f8f8f8;
  }

  .tags-li.active {
    color: #fff !important;
    border: 1px solid #409eff;
    background-color: #409eff;
  }

  .tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
  }
  .tags-li.active .tags-li-title {
    color: #fff;
  }
}
</style>