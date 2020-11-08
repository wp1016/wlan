const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('dist'))
app.use(function (req, res) {
  res.sendFile(path.dirname(require.main.filename) + '/dist/index.html')
})

const port = 8091

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Local DevServer Started on port ${port}...`)
})
