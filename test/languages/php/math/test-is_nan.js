// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_nan = require('../../../../src/php/math/is_nan.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/is_nan.js (tested in test/languages/php/math/test-is_nan.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = is_nan(NaN)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = false
    var result = is_nan(0)
    expect(result).to.deep.equal(expected)
    done()
  })
})