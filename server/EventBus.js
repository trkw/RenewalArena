import {get, getWithDefault} from '../utils/base'

export function event (eventName, eventType = 'any') {
  return function (target, listenerName, descriptor) {
    let listeners = getWithDefault(target, '$prototypeEventListeners', [])
    listeners.push({
      eventName,
      eventType,
      listenerName
    })
    return descriptor
  }
}

/// Emit event to eent bus
// $emit (eventType, eventName, payload)
// $emit (eventName, payload, eventType = 'any')
// $emit (eventName, eventType = 'any', payload = undefined)
function $emit (...args) {
  let eventType, eventName, payload
  switch (args.length) {
    case 3:
      eventType = args[0]
      eventName = args[1]
      payload = args[2]
      break
    case 2:
      eventType = 'any'
      eventName = args[0]
      payload = args[1]
      break
    case 1:
      eventType = 'any'
      eventName = args[1]
      payload = undefined
      break
    default:
      throw new Error('eventName not set!')
  }

  this.$eventBus.emit(eventType, eventName, payload, this)
}

export function useEventBus () {
  return function (Class) {
    Class.prototype.$emit = $emit
    return (...args) => {
      let object = new Class(...args)
      if (!object.$eventBus) object.$eventBus = undefined
      if (!object.$eventListeners) object.$eventListeners = {}
      return object
    }
  }
}

export class EventBus {
  constructor () {
    this.listeners = {}
  }

  emit (eventType, eventName, payload, caller) {
    // console.log(this.listeners)
    // console.log(arguments)
    let listeners = get(this.listeners, eventName, eventType) || []
    if (eventType !== 'any') {
      let listenersAny = get(this.listeners, eventName, 'any') || []
      listeners = [...listeners, ...listenersAny]
    }
    if (eventName !== 'any') {
      let listenersAny = get(this.listeners, 'any', eventType) || []
      listeners = [...listeners, ...listenersAny]
    }
    listeners.forEach(({object, listenerName}) => {
      object[listenerName](payload, caller)
    })
  }

  use (object) {
    if (object.hasOwnProperty('$eventBus')) {
      object.$eventBus = this
      const objectPrototype = Object.getPrototypeOf(object)
      if (objectPrototype.$prototypeEventListeners) {
        objectPrototype.$prototypeEventListeners.forEach(({eventName, eventType, listenerName}) => {
          let eventNameList = getWithDefault(
            this.listeners,
            eventName, {},
            eventType, [])
          eventNameList.push({
            object,
            listenerName
          })
        })
      }
    }
  }
}
