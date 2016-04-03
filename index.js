/*!
 * base-request <https://github.com/tunnckoCore/base-request>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function requestPlugin (config) {
  return function plugin (app) {
    if (this.isRegistered('base-request')) return

    this.define('request', function request (method, path, data, cb) {
      if (typeof data === 'function') {
        cb = data
        data = null
      }
      if (typeof cb !== 'function') {
        throw new TypeError('base-request: expect `cb` to be a callback function')
      }

      // TODO: utils.defaults
      var defaults = utils.defaults(utils.extendShallow({
        json: true,
        apiurl: 'https://api.github.com'
      }, this.options, config))
      var options = defaults(method, path, data)

      utils.requestAll(options, cb)
      return this
    })
    this.define('requestAll', this.request)
  }
}
