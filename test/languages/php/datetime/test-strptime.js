// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strptime = require('../../../../src/php/datetime/strptime.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/datetime/strptime.js (tested in test/languages/php/datetime/test-strptime.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {tm_sec: 35, tm_min: 21, tm_hour: 22, tm_mday: 12, tm_mon: 10, tm_year: 109, tm_wday: 4, tm_yday: 315, unparsed: ''}
    var result = strptime('20091112222135', '%Y%m%d%H%M%S') // Return value will depend on date and locale
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = {tm_sec:0, tm_min:0, tm_hour:0, tm_mday:0, tm_mon:0, tm_year:109, tm_wday:3, tm_yday: -1, unparsed: 'extra'}
    var result = strptime('2009extra', '%Y')
    expect(result).to.deep.equal(expected)
    done()
  })
})