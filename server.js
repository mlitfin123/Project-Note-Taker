
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Connect the routes to the 
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

//This function is used to listen on the Port
app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});