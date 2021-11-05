const app = require('express')()
const consign = require('consign')
const path = require('path');




consign({ verbose: true, locale: 'pt-br', cwd: 'src' })
  .include('middlewares')
  .then('server')
  .into(app)