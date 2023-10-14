const express = require("express");
const app = express();
const PORT = 8800;
const dotenv = require("dotenv");
const routes = require('./backend/routes/routes');
const logger= require('morgan');
dotenv.config();
const path= require('path')



//swagger
const swaggerUI= require('swagger-ui-express');
const swaggerJsDoc= require('swagger-jsdoc')
const swaggerSpec={
  definition:{
    openapi: "3.0.0",
    info:{
      title:"Node MongoDB API",
      version: "1.0.0"
    },
    servers:[
      {
        url:"http:localhost:8800"
      }
    ]
  },
  apis:[`${path.join(__dirname, "/backend/routes/*.js")}`]
}

//logger
app.use(logger('dev'));
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
app.use('/api/v1', routes)





//puerto
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto:${PORT}`);
  });