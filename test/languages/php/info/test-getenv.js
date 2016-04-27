// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var getenv = require('../../../../src/php/info/getenv.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/info/getenv.js (tested in test/languages/php/info/test-getenv.js)', function () {
  it('should pass example 1', function (done) {
    var expected = false
    var result = getenv('LC_ALL')
    expect(result).to.deep.equal(expected)
    done()
  })
})