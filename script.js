document.getElementById('loginform').addEventListener('submit', function(event) {
    var Username = document.getElementById('text').value.trim();
    var password = document.getElementById('password').value.trim();

    if (!Username || !password) {
        alert('All fields are required.');
        event.preventDefault(); 
    }
});

document.getElementById('signupform').addEventListener('submit', function(event) {
    var Username = document.getElementById('text').value.trim();
    var Username = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if (!Username || !password) {
        alert('All fields are required.');
        event.preventDefault(); 
    }
});

const loginForm = document.getElementById('loginform');
const signupForm = document.getElementById('signupform');
const toggleLink = document.getElementById('toggleLink');

toggleLink.addEventListener('click', function (event) {
    event.preventDefault(); 
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleLink.innerHTML = "Don't have an account? Sign Up";
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleLink.innerHTML = "Already have an account? Login";
    }
});
