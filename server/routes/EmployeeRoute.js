const express = require('express');
const app = express();
const EmployeeRoute = express.Router();

// Require Post model in our routes module
let Employee = require('../models/employeeSchema');

EmployeeRoute.route('/add').post(function (req, res) {
    let employee = new Employee(req.body);
   employee.save()
      .then(employe => {
      res.status(200).json(employee);
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  
  // Defined get data(index or listing) route
 EmployeeRoute.route('/')
     .get(function (req, res) {
      Employee.find(function (err, employees){
      if(err){
        console.log(err);
      }
      else {
        res.json(employees);
      }
    });
  });
  
  
  
  module.exports = EmployeeRoute;
  