/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-01 22:36:47
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
    code: 'JSFS01_SYS',
    name: '现金',
    settlementCategory: '现金',
    businessCategory:'业务',
    commission: false,
    bearer: '',
    paymentType: '',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS02_SYS',
    name: '现金支票',
    settlementCategory: '支票',
    businessCategory:'银行业务',
    commission: false,
    bearer: '',
    paymentType: '',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS03_SYS',
    name: '转账支票',
    settlementCategory: '支票',
    businessCategory:'银行业务',
    commission: false,
    bearer: '',
    paymentType: '',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS04_SYS',
    name: '电汇',
    settlementCategory: '汇兑',
    businessCategory:'银行业务',
    commission: true,
    bearer: '本方',
    paymentType: '直接扣缴',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS05_SYS',
    name: '信汇',
    settlementCategory: '汇兑',
    businessCategory:'银行业务',
    commission: true,
    bearer: '本方',
    paymentType: '直接扣缴',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS06_SYS',
    name: '商业承兑汇票',
    settlementCategory: '汇票',
    businessCategory:'票据业务',
    commission: true,
    bearer: '本方',
    paymentType: '直接扣缴',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS07_SYS',
    name: '银行承兑汇票',
    settlementCategory: '汇票',
    businessCategory:'票据业务',
    commission: true,
    bearer: '本方',
    paymentType: '直接扣缴',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS08_SYS',
    name: '信用证',
    settlementCategory: '信用证',
    businessCategory:'银行业务',
    commission: true,
    bearer: '本方',
    paymentType: '直接扣缴',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS09_SYS',
    name: '应收票据背书',
    settlementCategory: '银行承兑汇票',
    businessCategory:'票据业务',
    commission: false,
    bearer: '',
    paymentType: '',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  },{
    code: 'JSFS10_SYS',
    name: '内部利息结算',
    settlementCategory: '汇兑',
    businessCategory:'内部结算',
    commission: false,
    bearer: '',
    paymentType: '',
    dataState: '已审核',
    auditor: 'Administrator',
    auditDate: '1993/8/8',
    disabled: false,
    disabler: '',
    disableDate: '',
    preset: false
  }]);
