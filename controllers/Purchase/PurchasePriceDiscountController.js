/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 00:18:19
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Purchase/purchasePriceDiscountEntities')
});
