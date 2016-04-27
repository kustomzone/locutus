// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var date = require('../../../../src/php/datetime/date.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/datetime/date.js (tested in test/languages/php/datetime/test-date.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '07:09:40 m is month'
    var result = date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'September 2, 2003, 12:26 am'
    var result = date('F j, Y, g:i a', 1062462400)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = '2003 36 2003'
    var result = date('Y W o', 1062462400)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 10
    var $x = date('Y m d', (new Date()).getTime() / 1000)
    $x = $x + ''
    var result = $x.length // 2009 01 09
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = '52'
    var result = date('W', 1104534000)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = '999 31'
    var result = date('B t', 1104534000)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    var expected = '52 1293750000'
    var result = date('W U', 1293750000.82); // 2010-12-31
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    var expected = '52'
    var result = date('W', 1293836400); // 2011-01-01
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 9', function (done) {
    var expected = '52 2011-01-02'
    var result = date('W Y-m-d', 1293974054); // 2011-01-02
    expect(result).to.deep.equal(expected)
    done()
  })
})