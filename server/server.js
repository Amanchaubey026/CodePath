require('dotenv').config();
const express = require('express');
const { isConnectedToDb } = require('./config/db.config');
const app = express();
const PORT = process.env.port || 5000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('The server is up!')
})


app.listen(PORT,async()=>{
    try {
        isConnectedToDb();
        console.log(`App is running on port http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
    
})