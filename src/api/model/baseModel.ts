// 分页入参
export interface BasicPagingParams {
  page: number;
  pageSize: number;
}

// 分页返回
export interface BasicPagingResult<T> {
  total: number;
  items: T[];
  page: number;
  pages: number;
  pageSize: number;
}

// 返回结果
export interface BasicResult<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  data: T;
}
