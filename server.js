const express = require('express')
const bodyParser = require('body-parser')

// the main indexer of 
// how to handle incoming requests
const app = express()

// convert raw data into JSON objects
// BEFORE
// var j = "{ "key": "value" }"
// j.key -> error
// AFTER
// var parsed = JSON.parse(j)
// parsed.key -> "value"
// handles parsing of req.body for http handlers
app.use(bodyParser.json())

// pull in the routers to mount
const slackRouter = require('./slackRouter')

// make app utilize the imported handler
app.use(slackRouter)

// start the express server on the port set by the environment variable PORT
app.listen(process.env.PORT, function () {
  console.log('Twitbots app listening on port ' + process.env.PORT)
})