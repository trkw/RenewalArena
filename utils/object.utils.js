export let FlattenObject = function (ob) {
  let toReturn = {}
  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue
    if ((typeof ob[i]) === 'object') {
      let flatObject = FlattenObject(ob[i])
      for (let x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue
        toReturn[i + '/' + x] = flatObject[x]
      }
    } else {
      toReturn[i] = ob[i]
    }
  }
  return toReturn
}
