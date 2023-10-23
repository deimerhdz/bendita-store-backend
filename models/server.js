const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnect } = require('../database/config');
class Server {
  
    constructor(){
        this.app = express();
      
        this.pathUrl= {
            users:'/api/users',
            auth:'/api/auth',
            stores:'/api/stores',
            merchants:'/api/merchants',
            categories:'/api/categories',
            products:'/api/products',
            purchase:'/api/purchases',
            sale:'/api/sales'
        }
        this.port = process.env.PORT;
        this.database()
        this.middlewares()
        this.routes();
    }


    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.pathUrl.users,require('../routes/user.routes'))
        this.app.use(this.pathUrl.auth,require('../routes/auth.routes'))
        this.app.use(this.pathUrl.stores,require('../routes/store.routes'))
        this.app.use(this.pathUrl.merchants,require('../routes/merchant.routes'))
        this.app.use(this.pathUrl.categories,require('../routes/category.routes'))
        this.app.use(this.pathUrl.products,require('../routes/products.routes'))
        this.app.use(this.pathUrl.purchase,require('../routes/purchase.routes'))
        this.app.use(this.pathUrl.sale,require('../routes/sale.routes'))
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