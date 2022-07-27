const router = require('express').Router();
const path = require('path');




// get route for 404 not found 
// router.get('/*', (req, res) =>
//   res.sendFile(path.join(__dirname, '../develop/public/404.html'))
// );


// get route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// get route for homepage
router.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);



module.exports = router; 