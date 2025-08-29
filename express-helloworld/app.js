  var express = require('express');
  app = express();

// Define a route for the home page
app.get('/', function (req, res) {
  // res.send('Hello World!\n');
  res.send('Welcome to the Home page\n');
});

// About route
app.get('/about', function(req, res) {
  res.send('This is the About Page.');
});

// Contact route
app.get('/contact', function(req, res) {
  res.send('Contact us at contact@example.com');
});

// POST route example
app.post('/submit', function(req, res) {
  res.send('Form submitted successfully!');
})

// PUT route example
app.put('/update', function(req, res) {
  res.send('Update successful!');
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars! Update-App!!!\n');
});

//start the server on port 8080
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

