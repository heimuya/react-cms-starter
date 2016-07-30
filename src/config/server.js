import { create } from 'apisauce'

export default create({
  baseURL: 'http://www.baidu.com/api',
  headers: {'Accept': 'application/json'}
})
