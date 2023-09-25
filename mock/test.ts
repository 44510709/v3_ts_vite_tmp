const Mock = require('mockjs');
import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/mock/test',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        timestamp: new Date().valueOf(),
        data: Mock.mock({
          title: '测试mock',
        }),
      };
    },
  },
] as MockMethod[];
