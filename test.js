'use strict'

const assert = require('assert')
const isArrayOfLength = require('.')

describe('isArrayOfLength()', function () {
  it('should return true for an array of the specified length', function () {
    assert(isArrayOfLength(['a', 'b'], 2))
  })

  it('should return false for an array of some other length', function () {
    assert(!isArrayOfLength(['a', 'b'], 3))
  })

  it('should return false for a string of the specified length', function () {
    assert(!isArrayOfLength('7 chars', 7))
  })

  it('should support the bind operator', function () {
    assert(isArrayOfLength.call(['a', 'b'], 2))
    assert(!isArrayOfLength.call(['a', 'b'], 3))
  })
})
