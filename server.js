// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Get our API routes
const routes = require('./server/routes/routes');

// Point static path to dist(View Engine)
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));


//connection.init();
// var mysql = require('mysql');
 
//  var connection = mysql.createConnection({
//    host         : 'dedi374.jnb2.host-h.net',
//    user         : 'saintcqaan_567',
//    password     : 'B1dd759L',
//    dbname     : 'saintcgaan_wp823b'
// });

// connection.connect( function( err){
//     if (err) {
//         console.log( "There was a problem " + err );
//     } else {
//         console.log( "Database Connection successful.");
//     }
// });