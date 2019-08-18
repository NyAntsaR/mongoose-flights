var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: Date
});

var flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },

    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() +1))
    },

    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    
    destinations: [destinationSchema],

    flight: [{ type: Schema.Types.ObjectId, ref: 'Flight'}]
});

module.exports = mongoose.model('Flight', flightSchema);