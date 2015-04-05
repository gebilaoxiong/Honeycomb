/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/TaxRate/List/meta/filed',
  'project/Foundation/TaxRate/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'TaxRateGridPanel',

    recordType: 'TaxRateRecord',

    properties: filed,

    store: store
  }
});