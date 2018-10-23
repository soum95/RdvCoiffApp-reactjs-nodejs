var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema =  new Schema({
 
  firstname: {
      type :String ,
     
  },
 lastname : {
    type: String,
  
  },
  job : {
     type: String,
   
   },
  description : {
    type: String,
 
 
  },
  img: {
    type: String,
 
   
  }
},{

    collection: 'employees'


});


module.exports = mongoose.model('employeeSchema',employeeSchema);