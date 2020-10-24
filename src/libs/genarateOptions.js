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

export const genaratePorts = function (num, others) {
  let res = []
  for (let i = 0; i < num; i++) {
    res = res.concat([
      {
        port: i + 1 + 'A',
        ...others
      },
      {
        port: i + 1 + 'B',
        ...others
      },
      {
        port: i + 1 + 'C',
        ...others
      },
      {
        port: i + 1 + 'D',
        ...others
      }
    ])
  }

  return res
}
