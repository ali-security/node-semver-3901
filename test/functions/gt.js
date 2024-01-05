const t = require('node:test')
const a = require('node:assert')

const gt = require('../../functions/gt')
const comparisons = require('../fixtures/comparisons.js')
const equality = require('../fixtures/equality.js')

t.test('comparison tests', async t => {
  for (const [v0, v1, loose] of comparisons) {
    await t.test(`${v0} ${v1} ${loose}`, t => {
      a.ok(gt(v0, v1, loose), `gt('${v0}', '${v1}')`)
      a.ok(!gt(v1, v0, loose), `!gt('${v1}', '${v0}')`)
      a.ok(!gt(v1, v1, loose), `!gt('${v1}', '${v1}')`)
      a.ok(!gt(v0, v0, loose), `!gt('${v0}', '${v0}')`)
    })
  }
})

t.test('equality tests', async t => {
  for (const [v0, v1, loose] of equality) {
    await t.test(`${v0} ${v1} ${loose}`, t => {
      a.ok(!gt(v0, v1, loose), `!gt(${v0}, ${v1})`)
      a.ok(!gt(v1, v0, loose), `!gt(${v1}, ${v0})`)
    })
  }
})
