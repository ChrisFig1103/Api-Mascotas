const pgp = require('pg-promise')();

const connectionConfig ={
    host:'localhost',
    port: 5432,
    database:'my-database-name',
    user: 'user-name',
    password:'user-password',
    max:30
};

const db = pgp(connectionConfig);

async function getProducts(){
    try{
        const results = await db.any('SELECT * from products');
        return Promise.resolve(results);
    } catch (error){
        return Promise.reject(error);
    }   
}

exports.getProducts = getProducts;