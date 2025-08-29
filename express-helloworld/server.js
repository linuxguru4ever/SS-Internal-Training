const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
//app.listen(3000, () => {
//  console.log('Server is running at http://localhost:4000');
//});

app.get('/mars', function(req, res) {
  res.send('Hello Mars! Update-App 8/29!!!\n');
});

//start the server on port 8080
app.listen(8080, function () {
  console.log('Example app listening on port 8088!');
});