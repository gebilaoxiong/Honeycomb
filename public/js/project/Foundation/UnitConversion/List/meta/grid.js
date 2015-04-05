/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/UnitConversion/List/meta/filed',
  'project/Foundation/UnitConversion/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'UnitConversionGridPanel',
    
    recordType: 'UnitConversionRecord',

    properties: filed,

    store: gridStore
  }
});

