var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    // Flight.find({}, function(err, flights) {
    //     res.render('flights/index', { title: 'All Flights', flights });
    // });
    Flight.find({})
    .sort({ departs: 'asc'})
    .then(function(flights){
      console.log(flights);
      res.render('flights/index', { title: 'All Flights', flights });
    })
    .catch(function(err){
      console.log(err);
      res.render('flights/index', {
        message: err
      });
    })
}

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('flight').exec(function(err, flight) {
      // Performer.find({}).where('_id').nin(movie.cast)
      Ticket.find({_id: {$nin: flight.flight}})
      .exec(function(err, tickets) {
        console.log(tickets);
        res.render('flights/show', {
          title: 'Flight Detail', flight, tickets
        });
      });
    });
  }
  

function newFlight(req, res){
    res.render('flights/new', { title: 'Add Flight'});
}

function create(req, res){
    var flight = new Flight(req.body);
    flight.save(function(err) {
        //handle errors
        if (err) return res.render('/flights/new');
        res.redirect(`/flights/${flight._id}`);
  });
} 