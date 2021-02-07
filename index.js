const express = require('express');

const {getProducts} = require('./db_connection');

const app = express();

app.get('/',async (req,res)=>{
    try{
        const response = await getProducts();
        console.log(response);
        res.send(response);
    }catch(error){
        console.log(error);
        res.send('Oops something went wrong');
    }
});
 

app.listen(3000,()=>console.log('Listening on port 3000!'));