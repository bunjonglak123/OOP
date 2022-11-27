const express = require('express')
const app = express()
const port = 5000
const fs = require('fs')
const {parse} = require('csv-parse')
const { Server } = require('http')

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
result = []
const parser = parse({columns: true}, function(err, data){
    result = data
    console.log(result)
});

 fs.createReadStream(__dirname + '/sample_submission.csv').pipe(parser);


app.get('/', (req, res) => {
    res.send(result)
})
app.listen(port,()=>console.log("Server is running on port " + port))


