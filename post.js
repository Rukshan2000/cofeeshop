document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form fields
        if (name === '' || phone === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Prepare form data
        const formData = {
            Name: name,
            Email: email,
            Phone: phone,
            Message: message,
            SubmittedDateTime: new Date().toISOString() // Include current date and time
        };

        // Send form data to backend API
        fetch('https://www.archmage.lk/api/v1/webapi/assignment/saveassignment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully.');
                form.reset(); // Reset form fields
            } else {
                alert('Failed to submit form. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        });
    });
});
