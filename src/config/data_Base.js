//data_Base.js
import * as mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: '127.0.0.1', 
  port: 3306,
  user: "root",
  password: "N654321", // Use the password you just used to log in
  database: 'lab_mvc'
});





export default pool;