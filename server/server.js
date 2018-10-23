const express = require('express');

const bodyParser = require('body-parser');
const passport = require('passport');

const cors = require('cors');
const servicesroute= require('./routes/ServiceRoute');
const employesroute= require('./routes/EmployeeRoute');
const reservationsroute= require('./routes/ReservationRoute');
const users = require('./routes/UserRoute'); 


var {mongoose} = require('./db/mongoose');
const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', users);
app.use('/services', servicesroute);
app.use('/ reservations',  reservationsroute);


app.use('/employees', employesroute)
app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
