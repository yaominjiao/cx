import { ajax } from '@/common/js/ajax'
import api from '@/common/js/url'


//搜索
export function test () {
  return ajax({
    url: api.search,
    method: 'jsonp',
  })
}


