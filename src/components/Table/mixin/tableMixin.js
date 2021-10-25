import {getData} from '@/api/index'
export const mixinReq = {
  props:{
   //请求接口
   api: {
    default: 'bizSystemService.getEmployeeList',
  },
  },
  created () {
  },
  methods: {
    isRequest () {
      if(this.api === 'bizSystemService.getEmployeeList'){
        return getData
      }
    },
  }
}
