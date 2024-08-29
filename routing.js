const express = require("express");
const server = require('./server');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 4000;

app.use(bodyParser.json()); 
app.use(cors());

app.get('/api', (req, res) => {  
    server.getdata(req, res);
});

app.post('/api', (req, res) => {       
    server.postdata(req, res); // Only call postdata
});



app.listen(port, '172.17.15.65', () => console.log('listening on http://172.17.15.65:4000/api'));
