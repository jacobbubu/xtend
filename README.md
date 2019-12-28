# @jacobbubu/xtend

[![Build Status](https://travis-ci.org/jacobbubu/xtend.svg)](https://travis-ci.org/jacobbubu/xtend)
[![Coverage Status](https://coveralls.io/repos/github/jacobbubu/xtend/badge.svg)](https://coveralls.io/github/jacobbubu/xtend)
[![npm](https://img.shields.io/npm/v/@jacobbubu/xtend.svg)](https://www.npmjs.com/package/@jacobbubu/xtend/)

> Rewritten [xtend](https://github.com/Raynos/xtend) in typescript for learning purpose.

## Examples

```js
import { extend, mutableExtend } from '@jacobbubu/xtend'

// extend returns a new object. Does not mutate arguments
const combination = extend(
  {
    a: 'a',
    b: 'c'
  },
  {
    b: 'b'
  }
)
// combination = { a: "a", b: "b" }

// mutate argument in-place
const a = { foo: 'bar' }
mutableExtend(a, { bar: 'baz' })
// a.bar = 'baz'
```
