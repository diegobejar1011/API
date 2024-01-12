const mongoose = require("mongoose");
require('dotenv').config();


module.exports = () => mongoose.connect(process.env.URL_MONGODB)
.then(() =>{
    console.log("Conexion a mongoDB")
})
.catch(console.log);

