const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 3001;
require('./src/models/connection');
require('dotenv').config()

const student_router = require('./src/routes/studentRouter');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Api is running");
}); 

app.use('/api',student_router);

console.log(process.env.DOMAIN)

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})