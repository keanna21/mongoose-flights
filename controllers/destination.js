const FlightModel = require('../models/flights')

module.exports = {
    create
}


function create(req, res){
	console.log(req.body, ' <- req.body in create destination')
	
	FlightModel.findById(req.params.id)
			   .then(function(flight){

					console.log(flight)
					
					flight.destinations.push(req.body);
					
					flight.save()
								 .then(function(){
									res.redirect(`/flights/${req.params.id}`)
								 })
					

						

			   }).catch(err =>{
				console.log(err);
				res.send(err)
			   })

}