document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm'); // Make sure to assign an ID to your form

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form); // Collect form data

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse the incoming request body
app.use(express.urlencoded({ extended: true }));

// Route that handles form submission
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form data received:', formData);
  // Here you would typically save the data to a database
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

      fetch('http://localhost:3000/submit-form',{
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle success, such as displaying a message to the user
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user
    });
  });
});
