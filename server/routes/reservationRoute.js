const express = require('express');
const app = express();
const ReservationRoute = express.Router();

// Require Post model in our routes module
let Reservation = require('../models/reservationSchema');

ReservationRoute.route('/add').post(function (req, res) {
    let reservation= new Reservation(req.body);
    reservation.save()
      .then(reservation => {
      res.status(200).json(reservation);
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  
  // Defined get data(index or listing) route
  ReservationRoute.route('/').get(function (req, res) {
      Reservation.find(function (err, reservations){
      if(err){
        console.log(err);
      }
      else {
        res.json(reservations);
      }
    });
  });
  
 
  
  module.exports = ReservationRoute;
  