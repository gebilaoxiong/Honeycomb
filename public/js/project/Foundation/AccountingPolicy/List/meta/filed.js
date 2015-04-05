/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description
 */
define(function() {
  return [{
    //ID
    name: 'id',
    mapping: 'id',
    type: 'string',
    /*是否是主键*/
    isIdentity: true,
    /*是否生成列*/
    isColumn: false
  }, {
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true
  }, {
    //主币别
    name: 'standardCurrency',
    mapping: 'standardCurrency',
    type: 'string',

    header: '主币别',
    sortable: true
  }, {
    //会计日历
    name: 'accountingCalendar',
    mapping: 'accountingCalendar',
    type: 'string',

    header: '会计日历',
    sortable: true
  }, {
    //会计要素表
    name: 'accountingElementsTable',
    mapping: 'accountingElementsTable',
    type: 'string',

    header: '会计要素表',
    sortable: true
  }, {
    //汇率类型
    name: 'exchangeRate',
    mapping: 'exchangeRate',
    type: 'string',

    header: '汇率类型',
    sortable: true
  },{
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true
  }, {
    //禁用状态
    name: 'disabled',
    mapping: 'disabled',
    type: 'bool',

    header: '禁用状态',
    xtype: 'Boolean',
    sortable: true
  }, {
    //系统预置
    name: 'preset',
    mapping: 'preset',
    type: 'bool',

    header: '系统预置',
    xtype: 'Boolean',
    sortable: true
  }];
})