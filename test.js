'use strict'

const assert = require('assert')
const isArrayOfLength = require('.')

describe('isArrayOfLength()', function () {
  it('should return true for an array of the specified length', function () {
    assert.strictEqual(isArrayOfLength(['a', 'b'], 2), true)
  })

  it('should return true for an array matching any specified length', function () {
    assert.strictEqual(isArrayOfLength(['a', 'b'], [2, 3]), true)
  })

  it('should return false for an array of some other length', function () {
    assert.strictEqual(isArrayOfLength(['a', 'b'], 3), false)
    assert.strictEqual(isArrayOfLength(['a', 'b'], [3, 4]), false)
  })

  it('should return false for a string of the specified length', function () {
    assert.strictEqual(isArrayOfLength('7 chars', 7), false)
  })

  it('should consider specified class as equivalent to Array', function () {
    class ArrayLike {
      constructor (len) { this.length = len }
    }
    const arr = new ArrayLike(2)
    assert.strictEqual(isArrayOfLength(arr, 2), false)
    assert.strictEqual(isArrayOfLength(arr, 2, {arrays: [ArrayLike]}), true)
    assert.strictEqual(isArrayOfLength(arr, 2, {arrays: ArrayLike}), true)
    assert.strictEqual(isArrayOfLength(arr, 2, {arrays: 'ArrayLike'}), true)
    assert.strictEqual(isArrayOfLength(arr, 3, {arrays: [ArrayLike]}), false)
    assert.strictEqual(isArrayOfLength(arr, [2, 3], {arrays: [ArrayLike]}), true)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(isArrayOfLength.call(['a', 'b'], 2), true)
    assert.strictEqual(isArrayOfLength.call(['a', 'b'], 3), false)
  })
})
