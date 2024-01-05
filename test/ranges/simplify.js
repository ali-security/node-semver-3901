const t = require('node:test')
const a = require('node:assert')

const simplify = require('../../ranges/simplify.js')
const Range = require('../../classes/range.js')
const versions = [
  '1.0.0',
  '1.0.1',
  '1.0.2',
  '1.0.3',
  '1.0.4',
  '1.1.0',
  '1.1.1',
  '1.1.2',
  '1.2.0',
  '1.2.1',
  '1.2.2',
  '1.2.3',
  '1.2.4',
  '1.2.5',
  '2.0.0',
  '2.0.1',
  '2.1.0',
  '2.1.1',
  '2.1.2',
  '2.2.0',
  '2.2.1',
  '2.2.2',
  '2.3.0',
  '2.3.1',
  '2.4.0',
  '3.0.0',
  '3.1.0',
  '3.2.0',
  '3.3.0',
]

t.test('simplify', t => {
  a.equal(simplify(versions, '1.x'), '1.x')
  a.equal(simplify(versions, '1.0.0 || 1.0.1 || 1.0.2 || 1.0.3 || 1.0.4'), '<=1.0.4')
  a.equal(simplify(versions, new Range('1.0.0 || 1.0.1 || 1.0.2 || 1.0.3 || 1.0.4')), '<=1.0.4')
  a.equal(simplify(versions, '>=3.0.0 <3.1.0'), '3.0.0')
  a.equal(simplify(versions, '3.0.0 || 3.1 || 3.2 || 3.3'), '>=3.0.0')
  a.equal(simplify(versions, '1 || 2 || 3'), '*')
  a.equal(simplify(versions, '2.1 || 2.2 || 2.3'), '2.1.0 - 2.3.1')
})
