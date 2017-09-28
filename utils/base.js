export function get (object, prop, ...args) {
  let value = object[prop]
  if (!value) {
    return undefined
  }
  if (args.length === 0) {
    return value
  } else {
    return get(value, ...args)
  }
}

export function getWithDefault (object, prop, defaultValue, ...args) {
  let value = object[prop]
  if (!value) {
    object[prop] = (value = defaultValue)
  }
  if (args.length === 0) {
    return value
  } else {
    return getWithDefault(value, ...args)
  }
}
