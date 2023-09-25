import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { BasicResult } from '@/api/model/baseModel';
import { showToast } from 'vant';
import { UserStore } from '@/store/modules/users';
import { ResultEnum } from '@/enums/httpEnum';

const userStore = UserStore();

// 返回未登录但是不需要跳转登录页接口白名单
const WHITE_LIST: string[] = [];

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || '/api',
  withCredentials: true,
  timeout: 10000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      ...config.headers,
      Authorization: userStore.token,
    };

    config.params = {
      ...config.params,
    };

    if (config.method?.toLowerCase() === 'post') {
      if (!config.data) {
        config.data = {};
      }
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse<BasicResult<any>, AxiosRequestConfig>) => {
    const { data, config } = response;
    if (Number(data.code) !== ResultEnum.SUCCESS) {
      // 未登录
      if (Number(data.code) === ResultEnum.NOLOGIN) {
        if (WHITE_LIST.indexOf(config.url || '') === -1) {
          // 清除用户信息
          userStore.resetToken();
          // todo 跳转登录页

          return Promise.reject(response);
        }
      } else {
        setTimeout(() => {
          showToast(data.message || '网络错误，请重试');
        }, 0);

        return Promise.reject(response);
      }
    } else {
      return Promise.resolve(response);
    }
  },
  (error) => {
    let errorMessage = '';
    if (typeof navigator.onLine !== 'undefined' && !navigator.onLine) {
      errorMessage = '无网络服务!';
    } else {
      if (/timeout/.test(error.message)) {
        errorMessage = '请求超时!';
      } else {
        const { data } = error?.response || {};

        errorMessage = data?.message || error.message;
      }
    }

    setTimeout(() => {
      showToast(errorMessage);
    }, 0);

    return Promise.reject(error);
  },
);

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service(config)
      .then((res: AxiosResponse<BasicResult<T>, AxiosRequestConfig>) => {
        const { data } = res;
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default request;
