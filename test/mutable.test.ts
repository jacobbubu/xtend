import { mutableExtend } from '../src/index'

describe('mutable', () => {
  it('merge', () => {
    const a: Record<string, any> = { foo: 'bar' }
    mutableExtend(a, { bar: 'baz' })
    expect(a.bar).toBe('baz')
  })

  it('null prototype', () => {
    const a: Record<string, any> = { a: 'foo' }
    const b = Object.create(null)
    b.bar = 'baz'

    mutableExtend(a, b)
    expect(a.bar).toBe('baz')
  })

  it('null prototype mutable', () => {
    const a: Record<string, any> = { foo: 'bar' }
    const b = Object.create(null)
    b.bar = 'baz'

    mutableExtend(a, b)
    expect(a.bar).toBe('baz')
  })

  it('prototype pollution', () => {
    const a: Record<string, any> = {}
    const maliciousPayload: Object = '{"__proto__":{"oops":"It works!"}}'
    mutableExtend(a, maliciousPayload)
    expect(a.oops).toBeUndefined()
  })

  it('prototype pollution mutable', () => {
    const a: Record<string, any> = {}
    const maliciousPayload: Object = '{"__proto__":{"oops":"It works!"}}'

    expect(a.oops).toBeUndefined()
    mutableExtend({}, maliciousPayload)
    expect(a.oops).toBeUndefined()
  })
})
