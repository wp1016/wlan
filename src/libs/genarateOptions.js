export const genarateOptions = function (options) {
  let res = []
  for (let [key, value] of Object.entries(options)) {
    if (!Number.isNaN(Number(key))) {
      key = Number(key)
    }
    res.push({
      value: key,
      label: value
    })
  }

  return res
}
