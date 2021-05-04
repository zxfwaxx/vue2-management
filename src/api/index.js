import axios from "@/utils/request.js"

export const getData = () => {
  return axios.get('/api/profile')
}