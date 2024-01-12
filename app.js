const express = require('express');
const app = express();
const cors = require('cors');
const notesRouter = require('./src/routes/note.routes');
const connection = require("./src/config/database.config");
require('dotenv').config();
//middlewares
app.use(cors());
app.use(express.json());

app.use("/api", notesRouter);

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Servidor corriendo ${PORT}`)
})

connection();






