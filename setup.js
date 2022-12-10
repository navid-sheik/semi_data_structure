db.drivers.remove({});
db.clients.remove({});
db.bookings.remove({});
db.shifts.remove({});
db.operators.remove({});
db.cars.remove({});
db.payments.remove({})
db.revenue.remove({});



// PROBLEMS : SALARY ADJUSTMENTS, REVENUE VALUE ADJUSTMENTS, PAYMENT ADJUSTMENTS , MATCH N* OF PASSENGER TO 

//  Have like between 8-10 drivers (include no sactions and  previous roles) - 10 drivers IDS
db.drivers.insert({"id" : 1, 
        "full_name" :  "Alicia Parry" ,
        "address" : {"street":  "10 Mill Lane", "postcode" : "IV40 7XZ",  "city" :  "CORRAN", "country" :  "UK"},
        "contact_number" : "07038447319" ,
        "previous_roles" : [{"start_date": "2020-01-01T",  "end_date" :  "2021-01-01T" ,  "position": "operator"}],
        "sactions" :  [{"amount" : 34, "date": "2022-02-16T" }],
        "salary" : 300,
})

db.drivers.insert({"id" : 2, 
        "full_name" :  "Zachary Gregory" ,
        "address" : {"street":  "112 Layburn Courte", "postcode" : "PL27 9ES",  "city" :  "TREBETHERICK", "country" :  "UK"},
        "contact_number" : "07054804795" ,
        "previous_roles" : [],
        "sactions" :  [],
        "salary" : 400,
})                


db.drivers.insert({"id" : 3, 
        "full_name" :  "Courtney Pearson" ,
        "address" : {"street":  "50 Bishopgate Street", "postcode" : "HU11 7WY",  "city" :  "SEATON", "country" :  "UK"},
        "contact_number" : "07767667457" ,
        "previous_roles" : [],
        "sactions" :  [],
        "salary" : 385,
})    

db.drivers.insert({"id" : 4, 
        "full_name" :  "Liam Barton" ,
        "address" : {"street":  "64 Abbey Row", "postcode" : "TA7 6QL",  "city" :  "NYTHE", "country" :  "UK"},
        "contact_number" : "07000961253" ,
        "previous_roles" : [],
        "sactions" :  [{"amount" : 23, "date": "2022-02-16T" }, {"amount" : 17, "date": "2022-04-21T" } ,  {"amount" : 52, "date": "2022-07-12T" }],
        "salary" : 453,
})      

    
db.drivers.insert({"id" : 5, 
    "full_name" :  "Harvey Wallace" ,
    "address" : {"street":  "88 Ilchester Road", "postcode" : "OX5 2ZU",  "city" :  "MURCOTT", "country" :  "UK"},
    "contact_number" : "07043562969" ,
    "previous_roles" : [],
    "sactions" :  [{"amount" : 7, "date": "2022-01-14T" }, {"amount" : 18, "date": "2022-07-19T" }],
    "salary" : 567,
})                


db.drivers.insert({"id" : 6, 
    "full_name" :  "Michael Ryan" ,
    "address" : {"street":  "78 Farburn Terrace", "postcode" : "ST18 1EF",  "city" :  "LITTLE HAYWOOD", "country" :  "UK"},
    "contact_number" : "07044257608" ,
    "previous_roles" : [{"start_date": "2021-01-01T",  "end_date" :  "2022-01-01T" ,  "position": "operator"}],
    "sactions" :  [{"amount" : 26, "date": "2022-07-02T" }, {"amount" : 30, "date": "2022-05-02T" }],
    "salary" : 246,
})                

db.drivers.insert({"id" : 7, 
    "full_name" :  "Robert Johnson" ,
    "address" : {"street":  "39 Consett Rd", "postcode" : "DE65 1BS",  "city" :  "HILTON", "country" :  "UK"},
    "contact_number" : "07906757171" ,
    "previous_roles" : [{"start_date": "2021-01-01T",  "end_date" :  "2022-01-01T" ,  "position": "operator"},{"start_date": "2019-01-01T",  "end_date" :  "2021-01-01T" ,  "position": "driver"}],
    "sactions" :  [{"amount" : 34, "date": "2022-09-22T" }],
    "salary" : 356,
})            

db.drivers.insert({"id" : 8, 
    "full_name" :  "Rebecca Hyde" ,
    "address" : {"street":  "83 Duckpit Lane", "postcode" : "GL17 7DW",  "city" :  "UPPER LYDBROOK", "country" :  "UK"},
    "contact_number" : "07085157894" ,
    "previous_roles" : [],
    "sactions" :  [],
    "salary" : 466,
})            


db.drivers.insert({"id" : 9, 
    "full_name" :  "Scott Spencer" ,
    "address" : {"street":  "83 Fulford Road", "postcode" : "SA41 0DB",  "city" :  "PENTRE-GALAR", "country" :  "UK"},
    "contact_number" : "0704148 8139" ,
    "previous_roles" : [{"start_date": "2018-01-01T",  "end_date" :  "2022-01-01T" ,  "position": "operator"}],
    "sactions" :  [],
    "salary" : 367,
})            


db.drivers.insert({"id" : 10, 
    "full_name" :  "Jamie Webb" ,
    "address" : {"street":  "85 Constitution St", "postcode" : "SA66 7NS",  "city" :  "LLANGOLMAN", "country" :  "UK"},
    "contact_number" : "078 7996 7904" ,
    "previous_roles" : [],
    "sactions" :  [],
    "salary" : 345,
})          




//  Drivers shifts records , split evenly to cover 24 hours - 3 operators, 3 drivers at in the morning, afternnon, 3 drivers and 2 oparator at night at night
db.shifts.insert({
        "id" : 1,
        "type": "morning",
        "driver_id" : 1
})
db.shifts.insert({
        "id" : 2,
        "type": "morning",
        "driver_id" : 2
})
db.shifts.insert({
        "id" : 3,
        "type": "morning",
        "driver_id" : 3
})
db.shifts.insert({
        "id" : 4,
        "type": "afternoon",
        "driver_id" : 4
})
db.shifts.insert({
        "id" : 5,
        "type": "afternoon",
        "driver_id" : 5
})
db.shifts.insert({
        "id" : 6,
        "type": "afternoon",
        "driver_id" : 6
})
db.shifts.insert({
        "id" : 7,
        "type": "afternoon",
        "driver_id" : 7
})
db.shifts.insert({
        "id" : 8,
        "type": "night",
        "driver_id" : 8
})
db.shifts.insert({
        "id" : 9,
        "type": "night",
        "driver_id" : 9
})
db.shifts.insert({
        "id" : 10,
        "type": "night",
        "driver_id" : 10
})
// Operatoor Shitfts

db.shifts.insert({
    "id" : 11,
    "type": "morning",
    "operator_id" : 1
})


db.shifts.insert({
        "id" : 12,
        "type": "morning",
        "operator_id" : 2
 })

 db.shifts.insert({
        "id" : 13,
        "type": "morning",
        "operator_id" : 3
 })

db.shifts.insert({
        "id" : 14,
        "type": "afternoon",
        "operator_id" : 4
 })
    
    
db.shifts.insert({
        "id" : 15,
        "type": "afternoon",
        "operator_id" : 5
     })
    
db.shifts.insert({
        "id" : 16,
        "type": "afternoon",
        "operator_id" : 6
})

db.shifts.insert({
        "id" : 17,
        "type": "night",
        "operator_id" : 7
     })
    
db.shifts.insert({
        "id" : 18,
        "type": "night",
        "operator_id" : 8
})
    

// 8 Operators
db.operators.insert({
        "id" : 1,
        "full_name" : "Bethany May",
        "address" :  {"street":  "16 Princes Street", "postcode" : "NP2 0PJ",  "city" :  "ROCK", "country" :  "UK"},
        "contact_number" :  "07860619935",
        "salary" : 2468,
        
})

db.operators.insert({
        "id" : 2,
        "full_name" : "Gracie Archer",
        "address" :  {"street":  "23 Iffley Road", "postcode" : "RG25 9WG",  "city" :  "BROADMERE", "country" :  "UK"},
        "contact_number" :  "07789216954",
        "salary" : 2134,

})

db.operators.insert({
        "id" : 3,
        "full_name" : "Ellis Kent",
        "address" :  {"street":  "14 Newmarket Road", "postcode" : "DD11 4UZ",  "city" :  "HAYHILLOCK", "country" :  "UK"},
        "contact_number" :  "07843011266",
        "salary" : 1997,

})

db.operators.insert({
        "id" : 4,
        "full_name" : "Daniel Gibson",
        "address" :  {"street":  "88 St Denys Road", "postcode" : "PE32 3ZN",  "city" :  "POTT ROW", "country" :  "UK"},
        "contact_number" :  "07807019589",
        "salary" : 2140
})


db.operators.insert({
        "id" : 5,
        "full_name" : "Ruby Lees",
        "address" :  {"street":  "8 Winchester Rd", "postcode" : "TD8 4BN",  "city" :  "MERVINSLAW", "country" :  "UK"},
        "contact_number" :  "07839515644",
        "salary" : 2300,
})

db.operators.insert({
        "id" : 6,
        "full_name" : "Jessica Kelly",
        "address" :  {"street":  "31 Southern Way", "postcode" : "OX8 0TS",  "city" :  "NORTH LEIGH", "country" :  "UK"},
        "contact_number" :  "07081051900",
        "salary" : 2000,
})

db.operators.insert({
        "id" : 7,
        "full_name" : "Ellis Roberts",
        "address" :  {"street":  "65 Holburn Lane", "postcode" : "DG11 2EA",  "city" :  "HEITHAT", "country" :  "UK"},
        "contact_number" :  "07740650551",
        "salary" : 2130,

})


db.operators.insert({
        "id" : 8,
        "full_name" : "Maddison Greenwood",
        "address" :  {"street":  "94 High Street", "postcode" : "SY8 6UF",  "city" :  "ASHFORD CARBONEL", "country" :  "UK"},
        "contact_number" :  "0706673 9202",
        "salary" : 1980,
})



//10 cars -  (ID)1 awaiting  for repairs, (ID)8 written off, (ID)10 in-for-serviece, 
// 3 smalls cars / 4 medium / 3 large
db.cars.insert({
    "id" : 1,
    "registation_no" : "SAM 911E",
    "registation_date" : "2020-06-23T",
    "mot_date" : "2022-01-23T",
    "status_car": "awaiting-repair",
    "driver_id" : 1,
    "type": "small",
    "accessability" : true,

})

db.cars.insert({
        "id" : 2,
        "registation_no" : "S411 PLE",
        "registation_date" : "2018-03-18T",
        "mot_date" : "2022-06-13T",
        "status_car": "roadworthy",
        "driver_id" : 2,
        "type": "small",
        "accessability" : false,
    
})

db.cars.insert({
        "id" : 3,
        "registation_no" : "VGZ 4609",
        "registation_date" : "2021-02-30T",
        "mot_date" : "2022-03-16T",
        "status_car": "roadworthy",
        "driver_id" : 3,
        "type": "small",
        "accessability" : true,
})

db.cars.insert({
        "id" : 4,
        "registation_no" : "828 BVJ",
        "registation_date" : "2021-07-24T",
        "mot_date" : "2022-09-09T",
        "status_car": "roadworthy",
        "driver_id" : 4,
        "type": "medium",
        "accessability" : false,
    
})

db.cars.insert({
        "id" : 5,
        "registation_no" : "XYH 549",
        "registation_date" : "2019-05-02T",
        "mot_date" : "2022-02-17T",
        "status_car": "roadworthy",
        "driver_id" : 5,
        "type": "medium",
        "accessability" : true,
    
})


db.cars.insert({
        "id" : 6,
        "registation_no" : "TIG 2456",
        "registation_date" : "2020-10-12T",
        "mot_date" : "2022-01-16T",
        "status_car": "roadworthy",
        "driver_id" : 6,
        "type": "medium",
        "accessability" : false,
    
})

db.cars.insert({
        "id" : 7,
        "registation_no" : "903 LPO",
        "registation_date" : "2017-06-13T",
        "mot_date" : "2022-03-27T",
        "status_car": "roadworthy",
        "driver_id" : 7,
        "type": "large",
        "accessability" : true,
})

db.cars.insert({
        "id" : 8,
        "registation_no" : "GYC 207",
        "registation_date" : "2016-08-21T",
        "mot_date" : "2022-08-10T",
        "status_car": "written-off",
        "driver_id" : 8,
        "type": "medium",
        "accessability" : true,
    
    
})

db.cars.insert({
        "id" : 9,
        "registation_no" : "CUJ 442",
        "registation_date" : "2018-04-11T",
        "mot_date" : "2022-04-12T",
        "status_car": "roadworthy",
        "driver_id" : 9,
        "type": "large",
        "accessability" : false,
    
})

db.cars.insert({
        "id" : 10,
        "registation_no" : "RIG 4590",
        "registation_date" : "2021-10-19T",
        "mot_date" : "2022-08-20T",
        "status_car": "in-for-service",
        "driver_id" : 10,
        "type": "large",
        "accessability" : true,
    
})

// db.cars.insert({
//         "id" : 11,
//         "model_name" : "Skoda Octavia",
//         "registation_no" : "PJT 620J",
//         "registation_date" : "2022-01-27T",
//         "mot_date" : "2022-06-16T",
//         "status_car": " in-for-service",
//         "driver_id" : 8,
//         "type": "small",
//         "accessability" : True,
    
//     })

// 6 clients, MISSING -> FILL BOOKINGS 
db.clients.insert({
        "id" : 1,
        "full_name" : "Tilly McDonald",
        "type" : "private",
        "address" :  {"street":  "39 City Walls Rd", "postcode" : "WR6 2RR",  "city" :  "CLIFTON UPON TEME", "country" :  "UK"},
        "bookings_ids" :  [12],
})

db.clients.insert({
        "id" : 2,
        "full_name" : "Harvey Jenkins",
        "type" : "private",
        "address" :  {"street":  "34 Thirsk Road", "postcode" : "AB37 6TT",  "city" :  "BLAIRNAMARROW", "country" :  "UK"},
        "bookings_ids" :  [10,11],

})


db.clients.insert({
        "id" : 3,
        "full_name" : "Eve Denniss",
        "type" : "private",
        "address" :  {"street":  "5 Castledore Road", "postcode" : "IP12 7JS",  "city" :  "TUNSTALL", "country" :  "UK"},
        "bookings_ids" :  [8,9],

})


db.clients.insert({
        "id" : 4,
        "full_name" : "Maisie Gough",
        "type" : "corporate",
        "address" :  {"street":  "4 High Street", "postcode" : "IP14 0ZN",  "city" :  "ASHFIELD", "country" :  "UK"},
        "bookings_ids" :  [5,6,7],

})


db.clients.insert({
        "id" : 5,
        "full_name" : "Adam Bradley",
        "type" : "corporate",
        "address" :  {"street":  "72 Clasper Way", "postcode" : "NE48 9RZ",  "city" :  "HETHERINGTON", "country" :  "UK"},
        "bookings_ids" :  [2,3,4],

})


db.clients.insert({
        "id" : 6,
        "full_name" : "Jade Patterson",
        "type" : "private",
        "address" :  {"street":  "70 Overton Circle", "postcode" : "GL14 5LB",  "city" :  "LITTLE-DEAN", "country" :  "UK"},
        "bookings_ids" :  [1],

})








// Card_id is required, payments range from 20-60  - CHANGE BOOKING/ DRIVING / CLIENT / CAR (some are not roadworthy)/
//We
db.bookings.insert({
    "id" : 1,
    "client_id" : 6,
    "date" : "2022-04-14T",
    "pick_up_location" :  {"street":  "985 Alexander Road", "postcode" : "NW04 1OK",  "city" :  "London", "country" :  "UK"},
    "drop_off_location" :  {"street":  "761 Broadway", "postcode" : "EC21 4PN",  "city" :  "London", "country" :  "UK"},
    "number_of_passengers" : 9,
    "accesability" : true,
    "car_type" : "large",
    "operator_id" : 1,
    "car_id" : 7,
    "driver_id" : 7,
    "payment_id ": 1,
    "booking_type" : "one_off"
})

db.bookings.insert({
        "id" : 2,
        "client_id" : 5,
        "date" : "2022-11-17T",
        "pick_up_location" :  {"street":  "66 Queen Street", "postcode" : "SW20 7UJ",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "74 The Green", "postcode" : "NW37 1EQ",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 7,
        "accesability" : true,
        "car_type" : "medium",
        "operator_id" : 1,
        "car_id" : 6,
        "driver_id" : 6,
        "payment_id ": 2,
        "booking_type" : "monthly"
    })

db.bookings.insert({
        "id" : 3,
        "client_id" : 5,
        "date" : "2022-02-16T",
        "pick_up_location" :  {"street":  "68 The Drive", "postcode" : "E39 2GW",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "692 South Street", "postcode" : "W31 5XU",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 2,
        "accesability" : false,
        "car_type" : "small",
        "operator_id" : 2,
        "car_id" : 2,
        "driver_id" : 2,
        "payment_id ": 3,
        "booking_type" : "monthly"
})
    
db.bookings.insert({
        "id" : 4,
        "client_id" : 5,
        "date" : "2022-06-24T",
        "pick_up_location" :  {"street":  "15 King Street", "postcode" : "E59 1YA",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "91 Springfield Road", "postcode" : "WC28 1HV",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 6,
        "accesability" : true,
        "car_type" : "medium",
        "operator_id" : 2,
        "car_id" : 5,
        "driver_id" : 5,
        "payment_id ": 4,
        "booking_type" : "one_off"
})

db.bookings.insert({
        "id" : 5,
        "client_id" : 4,
        "date" : "2022-09-20T",
        "pick_up_location" :  {"street":  "9779 Stanley Road", "postcode" : "SW67 2AR",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "2 Windsor Road", "postcode" : "SE92 8OP",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 1,
        "accesability" : true,
        "car_type" : "small",
        "operator_id" : 3,
        "car_id" : 3,
        "driver_id" : 3,
        "payment_id ": 5,
        "booking_type" : "weekly"
})
    
db.bookings.insert({
        "id" : 6,
        "client_id" : 4,
        "date" : "2022-10-06T",
        "pick_up_location" :  {"street":  "50 The Avenue", "postcode" : "NW13 6PU",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "606 Kings Road", "postcode" : "SW50 4YW",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 8,
        "accesability" : true,
        "car_type" : "large",
        "operator_id" : 3,
        "car_id" : 7,
        "driver_id" : 7,
        "payment_id ": 6,
        "booking_type" : "one_off"
})


db.bookings.insert({
        "id" : 7,
        "client_id" : 4,
        "date" : "2022-07-09T",
        "pick_up_location" :  {"street":  "68 The Drive", "postcode" : "E39 2GW",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "692 South Street", "postcode" : "W31 5XU",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 7,
        "accesability" : false,
        "car_type" : "medium",
        "operator_id" : 4,
        "car_id" : 4,
        "driver_id" : 4,
        "payment_id ": 8,
        "booking_type" : "daily"
})
    
db.bookings.insert({
        "id" : 8,
        "client_id" : 3,
        "date" : "2022-06-20T",
        "pick_up_location" :  {"street":  "62 The Crescent", "postcode" : "WC49 6LK",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "44 The Drive", "postcode" : "W89 7CP",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 7,
        "accesability" : true,
        "car_type" : "medium",
        "operator_id" : 4,
        "car_id" : 4,
        "driver_id" : 4,
        "payment_id ": 7,
        "booking_type" : "weekly"
})

db.bookings.insert({
        "id" : 9,
        "client_id" : 3,
        "date" : "2022-04-27T",
        "pick_up_location" :  {"street":  "60 George Street", "postcode" : "SW29 7VR",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "9540 Station Road", "postcode" : "WC91 0LU",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 9,
        "accesability" : false,
        "car_type" : "large",
        "operator_id" : 5,
        "car_id" : 9,
        "driver_id" : 9,
        "payment_id ": 9,
        "booking_type" : "daily"
})

db.bookings.insert({
        "id" : 10,
        "client_id" : 2,
        "date" : "2022-10-29T",
        "pick_up_location" :  {"street":  "90 The Green", "postcode" : "W73 5NR",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "75 Green Lane", "postcode" : "SE65 4RX",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 3,
        "accesability" : true,
        "car_type" : "small",
        "operator_id" : 7,
        "car_id" : 3,
        "driver_id" : 3,
        "payment_id ": 10,
        "booking_type" : "one_off"
})

db.bookings.insert({
        "id" : 11,
        "client_id" : 2,
        "date" : "2022-08-23T",
        "pick_up_location" :  {"street":  "77 Highfield Road", "postcode" : "SW03 5CP",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "627 Park Avenue", "postcode" : "E84 9FU",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 1,
        "accesability" : false,
        "car_type" : "small",
        "operator_id" : 6,
        "car_id" : 2,
        "driver_id" : 2,
        "payment_id ": 11,
        "booking_type" : "daily"
})

db.bookings.insert({
        "id" : 12,
        "client_id" : 1,
        "date" : "2022-02-23T",
        "pick_up_location" :  {"street":  "761 London Road", "postcode" : "SW19 7CI",  "city" :  "London", "country" :  "UK"},
        "drop_off_location" :  {"street":  "8 The Drive", "postcode" : "NW95 4JF",  "city" :  "London", "country" :  "UK"},
        "number_of_passengers" : 6,
        "accesability" : true,
        "car_type" : "medium",
        "operator_id" : 8,
        "car_id" : 6,
        "driver_id" : 6,
        "payment_id ": 12,
        "booking_type" : "weekly"
})









// PAYMENTS - change amount

db.payments.insert({
        "id" : 1,
        "amount" : 56,
        "booking_id": 1,
        "paid" : true ,
        "date" : "2022-04-14T"
})

db.payments.insert({
        "id" : 2,
        "amount" : 36,
        "booking_id": 2,
        "paid" : true ,
        "date" : "2022-11-17T"
})

db.payments.insert({
        "id" : 3,
        "amount" : 86,
        "booking_id": 3,
        "paid" : true ,
        "date" : "2022-02-16T"
})

db.payments.insert({
        "id" : 4,
        "amount" : 35,
        "booking_id": 4,
        "paid" : true ,
        "date" : "2022-06-24T"
})

db.payments.insert({
        "id" : 5,
        "amount" : 22,
        "booking_id": 5,
        "paid" : true ,
        "date" : "2022-09-20T"
})

db.payments.insert({
        "id" : 6,
        "amount" : 57,
        "booking_id": 6,
        "paid" : true ,
        "date" : "2022-10-06T"
})

db.payments.insert({
        "id" : 7,
        "amount" : 78,
        "booking_id": 7,
        "paid" : true ,
        "date" : "2022-07-09T"
})

db.payments.insert({
        "id" : 8,
        "amount" : 83,
        "booking_id": 8,
        "paid" : true ,
        "date" : "2022-06-20T"
})

db.payments.insert({
        "id" : 9,
        "amount" : 23,
        "booking_id": 9,
        "paid" : true ,
        "date" : "2022-04-27T"
})

db.payments.insert({
        "id" : 10,
        "amount" : 57,
        "booking_id": 10,
        "paid" : true ,
        "date" : "2022-10-29T"
})

db.payments.insert({
        "id" : 10,
        "amount" : 57,
        "booking_id": 10,
        "paid" : true ,
        "date" : "2022-10-29T"
})

db.payments.insert({
        "id" : 10,
        "amount" : 57,
        "booking_id": 10,
        "paid" : true ,
        "date" : "2022-10-29T"
})

db.payments.insert({
        "id" : 11,
        "amount" : 36,
        "booking_id": 11,
        "paid" : true ,
        "date" : "2022-08-12T"
})

db.payments.insert({
        "id" : 12,
        "amount" : 48,
        "booking_id": 12,
        "paid" : true ,
        "date" : "2022-03-19T"
})

db.revenue.insert({
        "drivers_ids" : [1,2,3,4,5,6,7,8,9,10],
        "operators_ids" : [1,2,3,4,5,6,7,8],
        "payments_ids" : [1,2,3,4,5,6,7,8,9,10,11,12],
        "heating" : 245,
        "lighting" : 2455,
        "office_costs": 3466,
        "total_cars_maintance" :  357
    
})