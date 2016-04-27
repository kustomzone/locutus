// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var str_word_count = require('../../../../src/php/strings/str_word_count.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/str_word_count.js (tested in test/languages/php/strings/test-str_word_count.js)', function () {
  it('should pass example 1', function (done) {
    var expected = ['Hello', 'fri', 'nd', "you're", 'looking', 'good', 'today']
    var result = str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = {0: 'Hello', 6: 'fri', 10: 'nd', 14: "you're", 29: 'looking', 46: 'good', 51: 'today'}
    var result = str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = ['Hello', 'fri3nd', "you're", 'looking', 'good', 'today']
    var result = str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1, '\u00e0\u00e1\u00e3\u00e73')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = {0: 'hey'}
    var result = str_word_count('hey', 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})