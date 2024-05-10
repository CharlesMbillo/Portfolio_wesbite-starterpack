document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm'); // Make sure to assign an ID to your form

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form); // Collect form data


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
