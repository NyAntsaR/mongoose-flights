var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

function addToFlight(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.flight.push(req.body.ticketId);
        flight.save(function (err) {
          res.redirect(`/flights/${flight._id}`);
        });
    });
}

function newTicket(req, res){
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {
            title: 'New Ticket',
            tickets
        });
    })
}

function create(req, res){
    Ticket.create(req.body, function(err, ticket){
        res.redirect('/tickets/new');
    });
}

