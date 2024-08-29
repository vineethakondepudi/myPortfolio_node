// dbconnection.js
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'portfolio'
});

pool.connect((err)=>
    {
        //If no error occurs conncet the database
    
      if(!err)
      {
        console.log("database connected")
      }
      //If any error occur it will show the error
      else{
        console.log(err)
      }
    }) 
    //Exports the connection1
    module.exports=pool;


