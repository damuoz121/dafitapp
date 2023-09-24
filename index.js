const express = require("express");
const app = express();
const PORT = 8900;
const dotenv = require("dotenv");
const routes=require('./backend/routes/routes')
const logger= require('morgan')
dotenv.config();

app.use(logger('dev'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto:${PORT}`);
  });