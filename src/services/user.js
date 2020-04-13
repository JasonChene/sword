import { stringify } from 'qs';
import request from '../utils/request';
import func from '../utils/Func';

// =====================用户===========================

export async function accountLogin(params) {
  const data = func.toFormData(params);
  data.append('grant_type', 'password');
  data.append('scope', 'all');
  return request('/api/blade-auth/oauth/token', {
    headers: {
      'Tenant-Id': data.get('tenantId'),
    },
    method: 'POST',
    body: data,
  });
}

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function list(params) {
  return request(`/api/blade-user/list?${stringify(params)}`);
}

export async function grant(params) {
  return request('/api/blade-user/grant', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function resetPassword(params) {
  return request('/api/blade-user/reset-password', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function remove(params) {
  return request('/api/blade-user/remove', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function submit(params) {
  return request('/api/blade-user/submit', {
    method: 'POST',
    body: params,
  });
}

export async function update(params) {
  return request('/api/blade-user/update', {
    method: 'POST',
    body: params,
  });
}

export async function detail(params) {
  return request(`/api/blade-user/detail?${stringify(params)}`);
}

export async function getUserInfo() {
  return request('/api/blade-user/info');
}

export async function updatePassword(params) {
  return request('/api/blade-user/update-password', {
    method: 'POST',
    body: func.toFormData(params),
  });
}
