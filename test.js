/*!
 * base-request <https://github.com/tunnckoCore/base-request>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var base = require('base')
var baseRequest = require('./index')

test('base-request:', function () {
  var app = base().use(baseRequest())
  console.log(app)
})
