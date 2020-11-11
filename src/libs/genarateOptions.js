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

export const genaratePorts = function (num, others, append = '') {
  let res = []
  for (let i = 0; i < num; i++) {
    res.push({
      port: i + 1 + append,
      ...others
    })
  }
  return res
}
