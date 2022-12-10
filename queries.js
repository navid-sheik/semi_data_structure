// Count the number of working cars
db.cars.countDocuments({"status_car" :  "roadworthy"})



// The most requested car 


db.bookings.aggregate([{$group:{_id:"$car_id", count : {$sum : 1}}},    { $sort: {count : -1 }   } ])





// /Display the booking history of client with the corresponding locations 
db.clients.aggregate({ $unwind : "$bookings_ids" },  {$lookup : {from : "bookings" , localField :  "bookings_ids", foreignField :  "id" , as : "booking"  }}, 
                    {$group : {_id : "$full_name" , 
                    client_bookings : {$push : {pick_up : "$booking.pick_up_location.street" ,drop_off : "$booking.drop_off_location.street" }    }}} ,
                    {$project : {_id : 0 , name : "$_id",  client_bookings :  "$client_bookings"}
                    
}).pretty()




 // pick_up :  {$push :  "$booking.pick_up_location.street"} ,drop_off : {$push :  "$booking.drop_off_location.street"}   }},


//  Show the list of drivers and how many boooking they manage 
db.bookings.aggregate({$lookup : {from : "drivers" , localField :  "driver_id", foreignField :  "id" , as : "driver_id"  }},
                      {$group : {_id : "$driver_id.full_name",
                      client_bookings :{ $push : "$id"}}
                    
                    }
)

//Show the number of accessible cars
db.cars.aggregate({$match : {accessability :  true} }, { $count: "Total cars with accebility" })


// Average costs of a booking with more than 5 passengers

db.bookings.aggregate({})
// Show number of operator/driver working in the morning 


