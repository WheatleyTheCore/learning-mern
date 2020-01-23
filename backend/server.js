const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const badgerFactRoutes = express.Router();
const PORT = 4000;

let BadgerFact = require('./badgerFact.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.use('/badgerFacts', badgerFactRoutes);

badgerFactRoutes.route('/').get(function(req, res) {
    BadgerFact.find(function(err, fact) {
        if (err) {
            console.error(err);
        } else {
            res.json(fact);
        }
    });
});

badgerFactRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    BadgerFact.findById(id, function(err, fact) {
        res.json(fact);
    });
});

badgerFactRoutes.route('/add').post(function(req, res) {
    let fact = new BadgerFact(req.body);
    fact.save()
    .then(fact => {
        res.status(200).json({'fact': 'fact sucessfully added'});
    })
    .catch(err => {
        res.status(400).send('adding new fact failed');
    });
})

badgerFactRoutes.route('/update/:id').post(function(req, res) {
    BadgerFact.findById(req.params.id, function(err, fact){
        if (!fact) {
            res.status(404).send("data not found");
        } else {
            fact.badgerFact_data = req.body.badgerFact_data;

            fact.save().then(fact => {
                res.json("fact updated!");
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    })
})

badgerFactRoutes.route('/delete/:id').delete(function(req, res) {
    BadgerFact.findById(req.params.id, function(err, fact) {
        fact.remove().then( res.json("fact deleted!") )
    })
})

app.listen(PORT, function () {
    console.log("WOOOOO! The badger server is running on Port: " + PORT);
});