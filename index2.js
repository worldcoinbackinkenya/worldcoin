function validateLogin() {
    var loginUsername = document.getElementById('login-username').value;
   
    // Simple validation (replace this with your authentication logic)
    
        localStorage.setItem('loggedInUser', loginUsername);
        window.location.href = 'myaccount.html';
    }

    // Check if user data exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const loginForm = document.getElementById("signup-form");
    const resetPasswordForm = document.getElementById("reset-password-form");

    
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("login-username").value;
        const loginPassword = document.getElementById("login-password").value;

        const user = storedUsers.find(u => u.username === loginUsername && u.password === loginPassword);
        if(loginUsername =='' ||loginPassword==''){
          document.getElementById("login-username-error").textContent = "Please fill all the fields";
        }
        else if (user) {
          document.getElementById("login-username-error").style.color = "green";
          document.getElementById("login-username-error").textContent = "Login Successful";
             
             validateLogin();
             loginForm.reset();

            // You can redirect the user to another page or perform other actions here
        } else {
            document.getElementById("login-username-error").textContent = "Incorrect Email or Password";
            
        }
    });

    
    // Custom email validation
    document.getElementById("signup-username").addEventListener("input", function () {
        const emailInput = document.getElementById("signup-username").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput)) {
            document.getElementById("signup-username-error").textContent = "Invalid email format. Please enter a valid email address.";
        } else {
            document.getElementById("signup-username-error").textContent = "";
        }
    });

