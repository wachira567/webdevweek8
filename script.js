document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('formResponse').innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
        this.reset();
    } else {
        document.getElementById('formResponse').innerHTML = `<p>Please fill out all fields.</p>`;
    }
});