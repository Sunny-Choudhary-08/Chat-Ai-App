const dotenv = require('dotenv');
dotenv.config({});
const cookieParser = require('cookie-parser')
const express = require('express');
const connectDb = require('./config/database.js');
const app = express();
const userRoute = require('../backend/routes/userRoute.js');
const messageRoute = require('../backend/routes/messageRoute.js')



const PORT = process.env.PORT || 8080;

//middleware

app.use(express.json());
app.use(cookieParser());


//routes 

app.use('/api/v1/user',userRoute);
app.use('/api/v1/message',messageRoute);

app.listen(PORT , ()=>{
    connectDb();
    console.log(`App is listening to port : ${PORT}`);
});