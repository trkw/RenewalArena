export function EventListener () {
  return function (Class) {
    return (...args) => {
      let object = new Class(...args)
      object._isEventListener = true
      return object
    }
  }
}

export const Event = () => (target, name, descriptor) => {
  const original = descriptor.value
  if (typeof original === 'function') {
  } else {
    throw new Error(`${name} not is function. Only functions can be event listeners!`)
  }
  return descriptor
}
