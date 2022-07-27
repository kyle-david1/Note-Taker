const { readAndAppend, readFromFile } = require('../develop/helpers/fsUtils');
const router = require('express').Router();
const path = require('path');





// get route to read json file and return all saved notes as json 
router.get('/notes', (req, res) =>
  readFromFile(path.join(__dirname,'../db/db.json')).then((data) => res.json(JSON.parse(data)))
);



// post route for notes, add to the json file and return the new note to the client
router.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;
  const newNote = { title, text};
  readAndAppend(newNote, path.join(__dirname, '../db/db.json'))

});




// find a way to give each note a unique id. Find a json package that is able to do this.

module.exports = router; 