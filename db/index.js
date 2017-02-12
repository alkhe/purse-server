const pg = require('pg-promise')()

const connect = config => pg(config).connect()

module.exports = connect
