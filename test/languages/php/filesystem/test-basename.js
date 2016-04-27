// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var basename = require('../../../../src/php/filesystem/basename.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/filesystem/basename.js (tested in test/languages/php/filesystem/test-basename.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'home'
    var result = basename('/www/site/home.htm', '.htm')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'ecra.php?p=1'
    var result = basename('ecra.php?p=1')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'path'
    var result = basename('/some/path/')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 'path_ext'
    var result = basename('/some/path_ext.ext/','.ext')
    expect(result).to.deep.equal(expected)
    done()
  })
})