var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reservationSchema =  new Schema({
 
  name: {
      type :String ,
      required: true,
       trim: true,
       minlength: 1

  },
 email : {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
 phone: {
     type: String,
   
     trim: true,
     minlength: 1
   },
 date : {
    type: Date,
 
    trim: true,
    minlength: 1
  },
time : {
    type: String,
   trim: true,
    minlength: 1
},
employee : {
    type: String,
   trim: true,
    minlength: 1
  },
  note : {
      type: String,
   
      trim: true,
      minlength: 1
    }
},{

    collection: 'reservations'


});


module.exports = mongoose.model('reservationSchema',reservationSchema);