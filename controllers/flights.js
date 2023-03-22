const FlightModel = require('../models/flights')

module.exports = {
    index: index,
    new: newFlight,
    create, show
}

function index(req, res) {
 FlightModel.find({}).then(function(flights) {
    res.render('flights/index', {flights})
 }).catch(function(err){
    console.log(err)
 })
}

function newFlight(req, res){
    res.render('flights/new')
}

function create(req, res) {
console.log(req.body)
FlightModel.create(req.body)
.then(function(flights){
    console.log(flights)

    res.redirect(`/flights/${flights._id}`);
}).catch((err)=> {
    console.log(err);
    res.send('There was an error check the terminal, or log the err object')
})
}

function show(req, res) {
    FlightModel.findById(req.params.id)
    .then(function(flights) {
        console.log(flights)
        res.render('flights/show',{
            flight: flights
        } )
    }).catch((err) =>{
        console.log(err);
        res.send(err)
      })
}