/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:37:34
 * @description 
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/System/Permission/search',
      method: 'GET'
    }
  },

  autoLoad: {
    params: {
      start: 0,
      limit: 25
    }
  }
})
