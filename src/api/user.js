import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}

// 获取列表
export function getshipList(params) {
  return request({
    url: api.ShipList,
    method: 'get',
    params,
    hideloading: true
  })
}
// 发送验证码
export function sendCode(data) {
  return request({
    url: api.SendCode,
    method: 'post',
    data,
    hideloading: true
  })
}
// 登录
export function loginSystem(params) {
  return request({
    url: api.LoginSystem,
    method: 'post',
    params,
    hideloading: true
  })
}
// 获取设备列表
export function getDevices(params) {
  return request({
    url: api.GetDevices,
    method: 'get',
    params,
    hideloading: true
  })
}
// 编辑新增设备
export function updateDevice(data) {
  return request({
    url: api.UpdateDevice,
    method: 'post',
    data,
    hideloading: true
  })
}
// 根据no获取设备信息
export function getDeviceByImei(params) {
  return request({
    url: api.GetDeviceByImei,
    method: 'get',
    params,
    hideloading: true
  })
}
// 获取设备记录
export function getAlarmList(params) {
  return request({
    url: api.GetAlarmList,
    method: 'get',
    params,
    hideloading: true
  })
}
// 获取未处理报警列表
export function getUnHandleAlarmList(params) {
  return request({
    url: api.GetUnHandleAlarmList,
    method: 'get',
    params,
    hideloading: true
  })
}
// 获取未处理报警列表
export function removeDevice(data) {
  return request({
    url: api.RemoveDevice,
    method: 'post',
    data,
    hideloading: true
  })
}
// 船长获取概况
export function getShipBasicInfo(params) {
  return request({
    url: api.GetShipBasicInfo,
    method: 'get',
    params,
    hideloading: true
  })
}
// 船长获取概况
export function getShipCurrentState(params) {
  return request({
    url: api.GetShipCurrentState,
    method: 'get',
    params,
    hideloading: true
  })
}
// 船长获取概况
export function PostalarmFaultPageCaptain(params) {
  return request({
    url: api.PostalarmFaultPageCaptain,
    method: 'get',
    params,
    hideloading: true
  })
}
// 处置报警
export function handleAlarm(data) {
  return request({
    url: api.HandleAlarm,
    method: 'post',
    data,
    hideloading: true
  })
}
// 处置故障
export function handleFault(data) {
  return request({
    url: api.HandleFault,
    method: 'post',
    data,
    hideloading: true
  })
}
// 处置故障
export function consumptionInfo(params) {
  return request({
    url: api.ConsumptionInfo,
    method: 'get',
    params,
    hideloading: true
  })
}
// manage 获取岸电列表
export function seList(params) {
  return request({
    url: api.SeList,
    method: 'get',
    params,
    hideloading: true
  })
}
