var express = require("express");
var router = express.Router();

var Patient = require("../models/patient.js");

router.post("/", function (req, res) {
    var entry = new Patient({
        id: req.body.id,
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        email: req.body.email,
        DOB: req.body.DOB,
        lastCheck: req.body.lastCheck,
        active: req.body.active
    });
    entry.save();
    res.send(entry);
});

router.get('/', function (req, res) {
    Patient.find(function (err, data) {
        res.json(data);
    });

});

router.get('/:id', function (req, res) {
    Patient.findById(req.params.id, function (err, data) {
        res.json(data);
    });
});

router.delete('/:id', function (req, res) {
    Patient.remove({ _id: req.params.id }, function (err, count)
    {
        Patient.find(function (err, data) {
            res.json(data);
        });
    });
    // Patient.findById(req.params.id,function(err,data)
    // {
    //     data.remove(function(){
    //         res.json(data);
    //     })
    // });
    
});

router.put('/:id', function (req, res) {
    Patient.findById(req.params.id, function (err, data) {
        data.id = req.body.id,
        data.fname = req.body.fname,
        data.mname = req.body.mname,
        data.lname = req.body.lname,
        data.email = req.body.email,
        data.DOB = req.body.DOB,
        data.lastCheck = req.body.lastCheck,
        data.active = req.body.active;
        
        data.save(function(err,data)
        {
            res.json(data);
        
        });
        
    });
});


module.exports = router;