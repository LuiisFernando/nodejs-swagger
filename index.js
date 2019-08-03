const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./configuration/swagger')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec)) // use swagger-Ui-express for your app documentation endpoint

routes(app)

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${server.address().port}`)
})