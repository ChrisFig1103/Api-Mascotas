const express = require('express');

const {getProducts} = require('./db_connection');

const app = express();

app.get('/',(req,res)=>{
    getProducts().then(function(response){
        console.log(response);
        res.send(response)
    })
    .catch(function(error){
        console.log(error);
        res.send('Ooooops something went wrong');
    })
});
 

app.listen(3000,()=>console.log('Listening on port 3000!'));