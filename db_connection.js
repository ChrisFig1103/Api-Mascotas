const pgp = require('pg-promise')();

const connectionConfig ={
    host:'some-postgres',
    port: 5432,
    database:'postgres',
    user: 'postgres',
    password:'mysecretpassword'
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