// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var substr_replace = require('../../../../src/php/strings/substr_replace.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/substr_replace.js (tested in test/languages/php/strings/test-substr_replace.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'bob'
    var result = substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'bob'
    var $var = 'ABCDEFGH:/MNRPQR/'
    var result = substr_replace($var, 'bob', 0, $var.length)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'bobABCDEFGH:/MNRPQR/'
    var result = substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0, 0)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 'ABCDEFGH:/bob/'
    var result = substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 10, -1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = 'ABCDEFGH:/bob/'
    var result = substr_replace('ABCDEFGH:/MNRPQR/', 'bob', -7, -1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = 'ABCDEFGH://'
    var result = substr_replace('ABCDEFGH:/MNRPQR/', '', 10, -1)
    expect(result).to.deep.equal(expected)
    done()
  })
})