const express = require('express')
const app = express();
const fs = require('fs');
console.log(__dirname);

//Create Endpoint to GET users.

app.get('/getUsers', function(req,res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8' ,function(err, data){
        console.log(data);
        res.end(data)
    })
})

app.post('/addUser', function(req, res){

    let user10 =   {
        "id": 11,
        "name": "Brandon Tsegai",
        "username": "Teacher BT",
        "email": "br@ndon.com",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
            }
        }
    }

    fs.readFile(__dirname + "/" + "users.json", 'utf8' ,function(err, data){
        data = JSON.parse(data);
        data.push(user10);
        res.end(JSON.stringify(data))
    })
})

const server = app.listen(8080, function(){
    let port = server.address().port;
    let host = server.address().address;

    console.log("Now running our test API at:");
    console.log("host: ", host);
    console.log("port: " , port)
    // http://localhost:8080/getUsers
    // http://localhost:8080/addUser
})