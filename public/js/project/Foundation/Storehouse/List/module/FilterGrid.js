/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:20:21
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/Storehouse/List/module/GroupGrid',
  'project/Foundation/Storehouse/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGridModule, filterMeta) {

  var StorehouseFilterGridModule;

  /*过滤表格模块*/
  StorehouseFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'StorehouseFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filterMeta)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: GroupGridModule
    }]

  });

  return StorehouseFilterGridModule;
});
