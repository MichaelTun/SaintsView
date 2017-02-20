var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertySchema = new Schema({
  property_name:  String,
  extra_info: String,
  weeks:   [{ 
      week_1: {
           season: String,
           module: String,
           arrival_date: Date,
           departure_date: Date,
           price: Number,
           availability: Number,
           owner: {
               owner_name: String,
               owner_last_name: String,
               phone_number: String,
               email: String
           }
        },
        week_2: {
           season: String,
           module: String,
           arrival_date: Date,
           departure_date: Date,
           price: Number,
           availability: Number,
           owner: {
               owner_name: String,
               owner_last_name: String,
               phone_number: String,
               email: String
           }
        },
        week_3: {
           season: String,
           module: String,
           arrival_date: Date,
           departure_date: Date,
           price: Number,
           availability: Number,
           owner: {
               owner_name: String,
               owner_last_name: String,
               phone_number: String,
               email: String
           }
        }
        }],
});