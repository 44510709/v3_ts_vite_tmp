import request from '@/utils/request';
import { ActivityDetailModel } from './model/testModel';

enum Api {
  GetActivityPageDetail = '/api-activities/v1/app/activity/form/detail',
}

/**
 * @description: 获取页面详情
 */
export function getActivityPageDetail(data: { id: number }) {
  return request<ActivityDetailModel>({
    url: Api.GetActivityPageDetail,
    method: 'POST',
    data: data,
  });
}
