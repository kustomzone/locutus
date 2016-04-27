// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var mktime = require('../../../../src/php/datetime/mktime.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/datetime/mktime.js (tested in test/languages/php/datetime/test-mktime.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 1201875002
    var result = mktime(14, 10, 2, 2, 1, 2008)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 1196467200
    var result = mktime(0, 0, 0, 0, 1, 2008)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = true
    var $make = mktime()
    var $td = new Date()
    var $real = Math.floor($td.getTime() / 1000)
    var $diff = ($real - $make)
    var result = $diff < 5
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 883612800
    var result = mktime(0, 0, 0, 13, 1, 1997)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = 883612800
    var result = mktime(0, 0, 0, 1, 1, 1998)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = 883612800
    var result = mktime(0, 0, 0, 1, 1, 98)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    var expected = 1293839999
    var result = mktime(23, 59, 59, 13, 0, 2010)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    var expected = -1
    var result = mktime(0, 0, -1, 1, 1, 1970)
    expect(result).to.deep.equal(expected)
    done()
  })
})