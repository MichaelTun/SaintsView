var connection = require('../connection');
var mysql = require('mysql');
const express = require('express');

function Property() {
    this.get = function (res) {
        connection.acquire(function (err, con) {
            connection.query('select * from ts_property', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (property, res) {
        connection.acquire(function (err, con) {
            con.query('insert into property set ?', property, function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Property creation failed' });
                } else {
                    res.send({ status: 0, message: 'Property created successfully' });
                }
            });
        });
    };

    this.update = function (property, res) {
        connection.acquire(function (err, con) {
            con.query('update property set ? where id = ?', [property, property.id], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Property update failed' });
                } else {
                    res.send({ status: 0, message: 'Property updated successfully' });
                }
            });
        });
    };

//     this.delete = function(id, res) {
//     connection.acquire(function(err, con) {
//       con.query('delete from property where id = ?', [id], function(err, result) {
//         con.release();
//         if (err) {
//           res.send({status: 1, message: 'Failed to delete'});
//         } else {
//           res.send({status: 0, message: 'Deleted successfully'});
//         }
//       });
//     });
//   };
}
module.exports = new Property();