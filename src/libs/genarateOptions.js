export const genarateOptions = function (options) {
  let res = []
  for (const [key,value] of Object.entries(options)) {
    res.push({
      value: key,
      label: value
    })
  }

  return res
}
