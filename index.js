import log  from './lib/log'
import R    from 'ramda'

log('Up and running')

export function Maybe(value) {
  const Nothing = {
    bind() { return this },
    maybe(def) { return 0 }
  }
  const Just =  {
    bind(fn) { return Maybe(fn(value)) },
    maybe(def, fn) { return fn ? fn(def) : def }
  }
  return value ? Just : Nothing
}

const data = [
  { x: 1, y: 4 },
  { x: 2 },
  { x: 3, y: 5 }
]

function may({x, y}) {
  return { x: Maybe(x).maybe(x),
    y: Maybe(y).maybe(y) }
}

const mayb = data.map(may)
log(mayb)
