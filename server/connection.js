var mysql = require('mysql');

function Connection() {
  this.pool = null;
 
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'dedi374.jnb2.host-h.net',
      user: 'saintcgaan_567',
      password: 'B1dd759L',
      dbname: 'saintcgaan_wp823b'
    });
  };
 
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      if (err) {
        console.log("Error in DB", + err);
      }
      else{
        console.log("MYSQL connected successfully")
      }
      callback(err, connection);
    });
  };
}
 
module.exports = new Connection();