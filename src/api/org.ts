import request from '@/utils/request'

/** 登录 */
export const getOrgs = () => {
  return request.get('/orgs')
}
