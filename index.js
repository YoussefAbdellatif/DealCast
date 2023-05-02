const express = require('express');
const path = require('path');
const db = require('./Utils/databaseConnection')
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config()

db()
app.use(express.static(path.join(__dirname, 'Client')))
app.use(bodyParser.json())


app.listen(3000,()=>{
    console.log('server is running');
});