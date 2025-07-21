// In your contact.js or script block
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitButton = contactForm ? contactForm.querySelector('.submit-button') : null;

    if (contactForm && formMessage && submitButton) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the default submission (which would go nowhere or to '#')

            // Show the custom success message
            formMessage.style.display = 'block';
            contactForm.reset(); // Clear the form fields
            submitButton.disabled = true; // Disable button
            submitButton.textContent = 'Sent!';

            // IMPORTANT NOTE: This does NOT actually send the message anywhere.
            // It only *simulates* a successful submission by showing the message.
            // For actual submission without Formspree's redirect, you'd need a server-side script.
        });
    }
});
