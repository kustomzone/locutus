// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ctype_alpha = require('../../../../src/php/ctype/ctype_alpha.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/ctype/ctype_alpha.js (tested in test/languages/php/ctype/test-ctype_alpha.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = ctype_alpha('Az')
    expect(result).to.deep.equal(expected)
    done()
  })
})