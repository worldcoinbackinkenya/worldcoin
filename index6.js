// Get the logged-in user from local storage
const loggedInUser = localStorage.getItem('loggedInUser');

// Display the username on the welcome page
if (loggedInUser) {
    document.write(loggedInUser);
} else {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
}
