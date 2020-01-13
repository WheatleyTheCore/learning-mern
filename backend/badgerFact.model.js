const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let badgerFact = new Schema({
    badgerFact_data: {
        type: String
    }
});

module.exports = mongoose.model("badgerFact", badgerFact);