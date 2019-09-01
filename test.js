'use strict'

const assert = require('assert')
const isArrayOfLength = require('.')

describe('isArrayOfLength()', function () {
  it('should return true for an array of the specified length', function () {
    assert.strictEqual(isArrayOfLength(['a', 'b'], 2), true)
  })

  it('should return false for an array of some other length', function () {
    assert.strictEqual(isArrayOfLength(['a', 'b'], 3), false)
  })

  it('should return false for a string of the specified length', function () {
    assert.strictEqual(isArrayOfLength('7 chars', 7), false)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(isArrayOfLength.call(['a', 'b'], 2), true)
    assert.strictEqual(isArrayOfLength.call(['a', 'b'], 3), false)
  })
})
