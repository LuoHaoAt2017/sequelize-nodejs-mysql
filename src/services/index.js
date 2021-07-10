import axios from '@/config/axios';

/**
 * ****************************** 应用接口 *******************************
 */
export function CreateCourse({ cname }) {
  return axios.request({
    url: '/course',
    method: 'put',
    data: {
      cname: cname,
    }
  });
}

export function DeleteCourse({ ccode }) {
  return axios.request({
    url: '/course',
    method: 'delete',
    data: {
      cid: ccode,
    }
  });
}

export function UpdateCourse({ cname, ccode }) {
  return axios.request({
    url: '/course',
    method: 'post',
    data: {
      cid: ccode,
      cname: cname,
    }
  });
}

export function SearchCourse({ cname }) {
  return axios.request({
    url: '/course',
    method: 'get',
    params: {
      cname: cname
    }
  });
}

export function DetailCourse({ ccode }) {
  return axios.request({
    url: '/course',
    method: 'get',
    params: {
      cid: ccode
    }
  });
}
