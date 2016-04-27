// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var html_entity_decode = require('../../../../src/php/strings/html_entity_decode.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/html_entity_decode.js (tested in test/languages/php/strings/test-html_entity_decode.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Kevin & van Zonneveld'
    var result = html_entity_decode('Kevin &amp; van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = '&lt;'
    var result = html_entity_decode('&amp;lt;')
    expect(result).to.deep.equal(expected)
    done()
  })
})