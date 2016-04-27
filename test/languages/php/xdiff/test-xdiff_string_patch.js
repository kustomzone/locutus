// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var xdiff_string_patch = require('../../../../src/php/xdiff/xdiff_string_patch.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/xdiff/xdiff_string_patch.js (tested in test/languages/php/xdiff/test-xdiff_string_patch.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Hello world!'
    var result = xdiff_string_patch('', '@@ -0,0 +1,1 @@\n+Hello world!')
    expect(result).to.deep.equal(expected)
    done()
  })
})