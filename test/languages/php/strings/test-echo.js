// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var echo = require('../../../../src/php/strings/echo.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/echo.js (tested in test/languages/php/strings/test-echo.js)', function () {
  it('should pass example 1', function (done) {
    var expected = undefined
    var result = echo('<div><p>abc</p><p>abc</p></div>')
    expect(result).to.deep.equal(expected)
    done()
  })
})