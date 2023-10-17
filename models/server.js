const express = require('express');
require('dotenv').config();
const { dbConnect } = require('../database/config');
class Server {
  
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.database()
    }

    async database(){
       await dbConnect()
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server on port ",this.port);
        })
    }
}

module.exports = Server;