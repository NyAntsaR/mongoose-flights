var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },

    price: {
        type: Number,
        min: 0
    },
    
});

module.exports = mongoose.model('Ticket', ticketSchema);