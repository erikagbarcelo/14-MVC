const signupFormHandler = async (event) => {
    event.preventDefault();

    // collect user input
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#user-email').value;
    const password = document.querySelector('#user-password').value;

    const response = await fetch('/api/users/', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username: username, email: email, password: password }),
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);