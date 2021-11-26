let express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const products=require('./routes/product')
let app=express();
connectDB()
app.use(express.json())
app.use('/user',user)
app.use('/product',products)


let PORT = process.env.PORT ||4000;
app.listen(PORT,(err)=>err? console.log(err):console.log(`server is running ${PORT}`));