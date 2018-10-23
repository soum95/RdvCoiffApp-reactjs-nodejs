var mongoose = require('mongoose');
var mongoDB='mongodb://soumaya:azerty1995@ds125302.mlab.com:25302/rdvcoiffeur';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db =mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = {mongoose};
