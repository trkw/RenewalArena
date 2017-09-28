import {useEventBus, event} from './EventBus'

@useEventBus()
export class MatchMaker {
  @event('init', 'app')
  init (parent) {
    console.log('MatchMaker')
    this.queue = {
      quick: [],
      ladder: [],
      private: []
    }
  }

  @event('battle/search', 'client')
  onBattleSearch ({session}, {type, squad, opponent}, cb) {

  }
}
