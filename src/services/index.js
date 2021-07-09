import fetch from '@/config/fetch';

/**
 * ****************************** 应用接口 *******************************
 */
export function CreateApplication({ name, area }) {
  return fetch('/application', {
    appName: name,
    domain: area
  }, 'Put', true);
}

export function DeleteApplication({ appCode }) {
  return fetch('/application', {
    appCode: appCode
  }, 'Delete', true);
}

export function UpdateApplication({ name, area, code }) {
  return fetch('/application', {
    appCode: code,
    appName: name,
    domain: area,
  }, 'Post', true);
}

export function SearchApplication({ area }) {
  let url = '/application';
  if (area) {
    url = `${url}?domain=${area}`
  }
  return fetch(url, {}, 'Get', true);
}

export function DetailApplication({ appCode }) {
  return fetch(`/application?appCode=${appCode}`, {}, 'Get', true);
}

/**
 * ****************************** 表单接口 *******************************
 */
// 创建属于某个应用的表单
export function CreateSchema({ appCode, name }) {
  const url = '/schema';
  return fetch(url, {
    appCode: appCode,
    schemaName: name,
  }, 'Put', true);
}
// 删除某个应用下的某个表单
export function DeleteSchema({ appCode, schemaCode }) {
  const url = '/schema';
  return fetch(url, {
    appCode: appCode,
    schemaCode: schemaCode
  }, 'Delete', true);
}
// 更新某个应用下的某个表单
export function UpdateSchema({ appCode, schemaCode, name }) {
  const url = '/schema';
  return fetch(url, {
    appCode: appCode,
    schemaCode: schemaCode,
    schemaName: name
  }, 'Post', true);
}
// 搜索某个应用下的全部表单
export function SearchSchema({ appCode }) {
  let url = '/schema';
  if (appCode) {
    url = `${url}?appCode=${appCode}`
  }
  return fetch(url, {}, 'Get', true);
}
export function DetailSchema({ appCode, schemaCode }) {
  return fetch(`/schema?appCode=${appCode}&schemaCode=${schemaCode}`, {}, 'Get', true);
}

/**
 * ****************************** 记录接口 *******************************
 */
// 创建属于某个表单的记录
export function CreateRecord({ appCode, schemaCode, recodeData }) {
  const url = '/record';
  return fetch(url, {
    appCode: appCode,
    schemaCode: schemaCode,
    recodeData: recodeData
  }, 'Put', true);
}
// 删除属于某个表单的记录
export function DeleteRecord({ appCode, schemaCode, recodeCode }) {
  const url = '/record';
  return fetch(url, {
    appCode: appCode,
    schemaCode: schemaCode,
    recodeCode: recodeCode
  }, 'Delete', true);
}
// 更新属于某个表单的记录
export function UpdateRecord({ appCode, schemaCode, recodeData }) {
  const url = '/record';
  return fetch(url, {
    appCode: appCode,
    schemaCode: schemaCode,
    recodeData: recodeData
  }, 'Post', true);
}
// 搜索属于某个表单的记录
export function SearchRecord({ appCode, schemaCode }) {
  const url = `/record/appCode=${appCode}&schemaCode=${schemaCode}`;
  return fetch(url, {}, 'Get', true);
}