import axios from "@/Utils/request.js"

export const getData = () => {
  return axios.get('/api/profile')
}