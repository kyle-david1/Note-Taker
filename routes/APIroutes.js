const express = require('express');
const { readAndAppend, readFromFile } = require('../Develop/helpers/fsUtils');
const router = express.Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');





// get route to read json file and return all saved notes as json 
router.get('/notes', (req, res) => {
  console.log(`${req.method} request receieved`)
  readFromFile(path.join(__dirname,'../db/db.json')).then((data) => res.json(JSON.parse(data)))
});



// post route for notes, add to the json file and return the new note to the client
router.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;
  const newNote = { title, text, id: uuidv4()};
  readAndAppend(newNote, path.join(__dirname, '../db/db.json')).then((data) => res.json('data returned'))

});

// delete route 
// router.delete('notes/:id', (req, res) => {
//   const newNote = req.body;
// )};




// find a way to give each note a unique id. Find a json package that is able to do this.

module.exports = router; 