const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://michael:michael@ds021994.mlab.com:21994/saitsview', ['properties', 'availability']);


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

//Get availability
router.get('/availability', function (req, res, next) {
    db.availability.find(function (err, availability) {
        if (err) {
            res.send(err);
        } else {
            res.json(availability);
        }
    });
});
//Get all Properties
router.get('/properties', function (req, res, next) {
    db.properties.find(function (err, properties) {
        if (err) {
            res.send(err);
        } else {
            res.json(properties);
        }
    });
});

// router.get("/api/properties/:id", function(req, res) {
//     console.log(req.params);
//   db.properties.findOne({ _id: new ObjectID(req.params.id) }, function(err, property) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contact");
//     } else {
//       res.status(200).json(property);
//     }
//   });
// });
// Get Single property
router.get('/properties/:id', function (req, res, next) {
    db.properties.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, property) {
        if (err) {
            res.send(err);
        }
        console.log('hello from routes');
        console.log(property);
        res.json(property);
    });
});

//Create property
router.post('/properties', function (req, res, next) {
    console.log('post Fired');
    var property = req.body;
    db.properties.save(property, function (err, property) {
        if (err) {
            res.send(err);
        }
        res.json(property);
    });
});

// // Delete Property
// router.delete('/properties/:id', function(req, res, next){
//     db.propertys.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, property){
//         if(err){
//             res.send(err);
//         }
//         res.json(property);
//     });
// });

// Update property
router.put('/properties/:id', function (req, res, next) {
    var property = req.body;
    console.log("update!!!");
    db.properties.update({ _id: mongojs.ObjectId(req.params.id) }, updproperty, {}, function (err, property) {
        if (err) {
            res.send(err);
        }
        console.log("Update Fired!")
        res.json(property);
    });
});

router.put('/properties/:id/:week', function (req, res, next) {
        var property = req.body;
        console.log(property);
        var week = property.week;
        var newAvailability = property.availability;
        id: mongojs.ObjectId(req.params.id);
        db.properties.update(
            { 'weeks.week' : week },
                { $set: { "weeks.$.availability": newAvailability} }, function(err, result){
                    if(!err) {
                        console.log('saved');
                    } else{
                        console.log('error');
                    }
                }
        );         
});


// //Create 
// router.post('/property', function (req, res) {
//     property.create(req.body, res);
// });

// //Update
// router.put('/property', function (req, res) {
//     property.update(req.body, res);
// });

// app.delete('/property/:id/', function(req, res) {
//   property.delete(req.params.id, res);
// });

module.exports = router;