import request from '@/utils/request'

export function addSendMan(formJson) {
  return request({
    url: '/sendMan/add',
    method: 'post',
    data: JSON.stringify(formJson)
  })
}
