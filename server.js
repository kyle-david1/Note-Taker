const express = require('express'); 

const api = require('./routes/APIroutes');
const html = require('./routes/HTMLroutes');

const PORT = 3001; 

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public folder for front end asset
app.use(express.static('public'));
app.use('/', html);
app.use('/api', api);





// listening at local host 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
