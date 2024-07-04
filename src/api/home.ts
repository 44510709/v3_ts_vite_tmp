import request from '@/utils/http'
/**
 * 获取经销商订单列表
 * @param data
 * @returns
 */
export const getListService = (data: any) => {
  return request({
    url: 'api/visit_serve/shop/getListService',
    method: 'post',
    data
  })
}
