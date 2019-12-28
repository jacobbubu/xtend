import { Arg, hasOwnProperty } from './common'

export function mutableExtend(target: Record<string, any>, ...args: Arg[]) {
  for (let i = 0; i < args.length; i++) {
    const source = args[i]

    if (typeof source === 'object') {
      for (let key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
  }

  return target
}
