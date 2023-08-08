
const express = require('express');
const router = express.Router();

// Handle form submission
router.post('/api/createRequest', (req, res) => {
  // Get the form data from the request body
  const formData = req.body;
//add own data processing logic here
  console.log('Received form data:', formData);

  // Respond with a success message
  res.status(200).json({ message: 'Form data successfully received and processed!' });
});

module.exports = router;