export default {
  filterParams: (obj = {}) =>
    Object.keys(obj).reduce((preObj, curKey) => {
      if (
        obj[curKey] !== '' &&
        obj[curKey] != null &&
        obj[curKey] !== undefined
      ) {
        preObj[curKey] = obj[curKey]
      }
      return preObj
    }, {})
}
