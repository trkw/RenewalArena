import actions from '../actions'
import {FlattenObject} from '../utils/object.utils'
import {CreateContext} from '../utils/plugin.helpers'

let actionsList = FlattenObject(actions)

export default (session, inject) => {
  inject('action', function Action (actionName, ...args) {
    let action = actionsList[actionName]
    if (action) {
      return action(CreateContext(session), ...args)
    } else {
      throw new Error(`Not existent action: ${actionName}`)
    }
  })
}
