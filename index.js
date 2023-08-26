const express = require("express");
const app = express();
const PORT = 8800;
const dotenv = require("dotenv");
dotenv.config();

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto:${PORT}`);
  });