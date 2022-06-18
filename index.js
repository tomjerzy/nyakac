const express = require('express')
const next = require('next')
const config = require('./server/config/config.js')
const { sequelize } = require('./server/models');
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler() 

app.prepare()
.then(() => {
    const server = express()
    const showRoutes = require('./server/routes/index.js')
    server.use("/api", showRoutes)

    server.get("*", (req, res) => {
        return handle(req, res)
    })
    sequelize.sync().then(() => {
          server.listen(config.PORT, err => {
        if(err) throw err;
        console.log(`> Ready on port ${config.PORT}`)
    })
    })

  
})
.catch(ex => {
    console.log(ex.stack)
    process.exit(1)
})