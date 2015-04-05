/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 19:38:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/Vendor/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var VendorListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '新增'
  }, {
    text: '删除'
  }, {
    text: '提交',
    menu: [{
      text: '提交'
    }, {
      text: '撤销'
    }]
  }, {
    text: '审核',
    menu: [{
      text: '审核'
    }, {
      text: '反审核'
    }]
  }];

  /*列表视图*/
  VendorListView = Q.Class.define(ListView, {

    type: 'VendorListView',

    tbar: tbar,

    title: '供应商列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return VendorListView;
});
