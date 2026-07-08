let output = document.getElementById('output');
const feedbackElement = document.getElementById('feedback');
    const formElement = document.forms[0];
    formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    const capitalizedFname = fname.value.toUpperCase();
    const capitalizedLname = lname.value.toUpperCase();
    formElement.style.display = 'none';
    output.textContent = 'Hello ' + capitalizedFname + ' ' + capitalizedLname + '; Thank you for your message. We will get back with you as soon as possible!';
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');
});