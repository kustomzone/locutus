// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_real = require('../../../../src/php/var/is_real.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_real.js (tested in test/languages/php/var/test-is_real.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = is_real(186.31)
    expect(result).to.deep.equal(expected)
    done()
  })
})