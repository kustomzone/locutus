// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var pathinfo = require('../../../../src/php/filesystem/pathinfo.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/filesystem/pathinfo.js (tested in test/languages/php/filesystem/test-pathinfo.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '/www/htdocs'
    var result = pathinfo('/www/htdocs/index.html', 1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'index.html'
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'html'
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 'index'
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = {basename: 'index.html', extension: 'html'}
    var result = pathinfo('/www/htdocs/index.html', 2 | 4)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_ALL')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    var expected = {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
    var result = pathinfo('/www/htdocs/index.html')
    expect(result).to.deep.equal(expected)
    done()
  })
})