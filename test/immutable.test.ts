import { extend } from '../src/index'

describe('immutable', () => {
  it('merge', () => {
    const a = { a: 'foo' }
    const b = { b: 'bar' }
    expect(extend(a, b)).toEqual({ a: 'foo', b: 'bar' })
  })

  it('replace', () => {
    const a = { a: 'foo' }
    const b = { a: 'bar' }
    expect(extend(a, b)).toEqual({ a: 'bar' })
  })

  it('undefined', () => {
    const a = { a: undefined }
    const b = { b: 'foo' }
    expect(extend(a, b)).toEqual({ a: undefined, b: 'foo' })
    expect(extend(b, a)).toEqual({ a: undefined, b: 'foo' })
  })

  it('handle 0', () => {
    const a = { a: 'default' }
    const b = { a: 0 }
    expect(extend(a, b)).toEqual({ a: 0 })
    expect(extend(b, a)).toEqual({ a: 'default' })
  })

  it('is immutable', () => {
    const record: Record<string, any> = {}
    extend(record, { foo: 'bar' })
    expect(record.foo).toBeUndefined()
  })

  it('null as argument', () => {
    const a = { foo: 'bar' }
    const b = null
    const c = void 0
    expect(extend(b, a, c)).toEqual({ foo: 'bar' })
  })
})
