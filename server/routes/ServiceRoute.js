const express = require('express');
const app = express();
const ServiceRoute = express.Router();

// Require Post model in our routes module
let Service = require('../models/serviceSchema');

ServiceRoute.route('/add').post(function (req, res) {
    let service = new Service(req.body);
    service.save()
      .then(service => {
      res.status(200).json(service);
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  
  // Defined get data(index or listing) route
  ServiceRoute.route('/').get(function (req, res) {
      Service.find(function (err, services){
      if(err){
        console.log(err);
      }
      else {
        res.json(services);
      }
    });
  });
  
 
  
  module.exports = ServiceRoute;
  