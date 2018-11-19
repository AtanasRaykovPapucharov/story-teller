const Koa = require('koa')
const server = new Koa()
const cors = require('koa-cors')
const statics = require('koa-static')
const port = process.env.PORT || 3339
const path = require('path')

server.use(cors())

server.use(statics(path.join(__dirname, 'src')))

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})