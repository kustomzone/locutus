// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var hypot = require('../../../../src/php/math/hypot.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/hypot.js (tested in test/languages/php/math/test-hypot.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 5
    var result = hypot(3, 4)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = null
    var result = hypot([], 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
})