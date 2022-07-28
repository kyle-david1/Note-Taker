const express = require('express'); 
const path = require('path');
const api = require('./routes/APIroutes');
// const html = require('./routes/HTMLroutes');
// const router = require('express').Router();


const PORT = process.env.PORT || 3001; 

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public folder for front end asset
app.use('/api', api);
app.use(express.static('public'));



// get route for homepage
app.get('', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);






// listening at local host 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
