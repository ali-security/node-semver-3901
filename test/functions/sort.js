const t = require('node:test')
const a = require('node:assert')
const sort = require('../../functions/sort')

t.test('sorting', (t) => {
  const list = [
    '1.2.3+1',
    '1.2.3+0',
    '1.2.3',
    '5.9.6',
    '0.1.2',
  ]
  const sorted = [
    '0.1.2',
    '1.2.3',
    '1.2.3+0',
    '1.2.3+1',
    '5.9.6',
  ]

  a.deepEqual(sort(list), sorted)
})
