<template>
  <div>
    <!-- 表格数据 -->
    <el-table
      highlight-current-row
      :data="tableDate"
      border
      :height="tableHeight"
      v-loading="loading"
      :size="size"
      @sort-change="sortChange"
      @selection-change="selectionChange"
      @current-change="currentChange"
      @row-click="rowClick"
      style="width: 100%"
    >
      <slot></slot>
    </el-table>
    <el-pagination
      v-if="paging"
      @size-change="limitChange"
      @current-change="pageChange"
      :current-page.sync="params.page"
      :page-size="params.limit"
      :page-sizes="[10, 15, 20, 30, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableCount"
    >
    </el-pagination>
  </div>
</template>
<script>
import { mixinReq } from './mixin/tableMixin.js'
export default {
  components: {},
  mixins: [mixinReq],
  props: {
    //请求接口
    // api: {
    //   default: 'bizSystemService.getEmployeeList',
    //   required: false
    // },
    //参数  默认返回分页和条数
    params: {
      type: [Object, String, Number],
      default: function () {
        return { page: 1, limit: 15 };
      }
    },
    // 尺寸
    size: {
      default: 'small'
    },
    // 分页
    paging: {
      default: true
    }
  },
  data () {
    return {
      tableCount: 0, //总条数
      tableDate: [], //表格数据
      loading: false, //loading动画
    };
  },
  created () {
    this.init(this.params);
  },
  computed: {
    // 实时更新server
    server: function () {
      return this.api.split('.')[0]
    },
    // 实时更新url
    url: function () {
      return this.api.split('.')[1]
    },
    tableHeight: function () {
      return this.paging ? 'calc(100% - 32px)' : '100%'
    }
  },
  methods: {
    init (params) {
      // this.loading = true;
      console.log(params)
      // this.isRequest()(params).then(res => {
      //   console.log(res)
      //   this.tableDate = res.profile
      // }).finally(() => {
      //   this.loading = false;
      // })
    },
    // 重新请求 //如果需要重新请求使用$refs 调用这个方法
    reload () {
      // 如果有分页
      if (this.paging) {
        this.params.page = 1;
      }
      // api动态加载完 开始重新请求数据
      this.$nextTick(() => {
        this.init(this.params);
      })
    },
    //二次封装 table自定义事件
    // 多选
    selectionChange (val) {
      this.$emit('selection-change', val)
    },
    // 单选
    currentChange (currentRow, oldCurrentRow) {
      this.$emit('current-change', currentRow, oldCurrentRow)
    },
    rowClick (row, event, column) {
      this.$emit('row-click', row, event, column)
    },
    // 排序
    sortChange (column, prop, order) {
      this.$emit('sort-change', column, prop, order)
    },
    // 表格翻页
    pageChange (page) {
      this.params.page = page;
      this.init(this.params);
    },
    limitChange (limit) {
      this.params.limit = limit;
      this.init(this.params);
    },
  }
};
</script>