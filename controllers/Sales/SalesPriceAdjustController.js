/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 01:06:15
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Sales/salesPriceAdjustEntities')
});
