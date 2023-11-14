
    // Check if user data exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const resetPasswordForm = document.getElementById("reset-password-form");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const signupUsername = document.getElementById("signup-username").value;
        const signupPhone = document.getElementById("signup-phone").value;
        const signupPassword = document.getElementById("signup-password").value;
        const signupPassword2 = document.getElementById("signup-password2").value;


        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Password validation regex (at least 6 characters)
        const passwordRegex = /^.{6,}$/;

        // Validate phone number
        const pattern = /^(07|01)/;

        // Validate email and password
        if (!emailRegex.test(signupUsername)) {
            document.getElementById("signup-username-error").style.color = "red";
            document.getElementById("signup-username-error").textContent = "Please provide a valid email address.";
            return;
        } else {
            document.getElementById("signup-username-error").textContent = "";
        }

        if (signupPhone =='') {
            document.getElementById("signup-phone-error").style.color = "red";
            document.getElementById("signup-phone-error").textContent = "Provide a phone number";
            return;
        } else {
            document.getElementById("signup-phone-error").textContent = "";
        }
        if(signupPhone.length <10||signupPhone.length >10){
            document.getElementById("signup-phone-error").style.color = "red";
            document.getElementById("signup-phone-error").textContent = "Phone must be 10 digits";
            return;
        }
        else{
             document.getElementById("signup-phone-error").textContent = "";
        }
        if(!pattern.test(signupPhone)){
            document.getElementById("signup-phone-error").style.color = "red";
          document.getElementById("signup-phone-error").textContent = "Phone must begin with either 07 or 01"; 
          return; 
        }else{
            document.getElementById("signup-phone-error").textContent = "";
        }

        if (!passwordRegex.test(signupPassword)) {
           document.getElementById("signup-password-error").textContent = "Password must be at least 6 characters.";
            return;
        } else {
           document.getElementById("signup-password-error").textContent = "";
        }

        if (signupPassword !== signupPassword2) {
            document.getElementById("signup-password2-error").textContent = "Your passwords do not match.";
            return;
        } else {
            document.getElementById("signup-password2-error").textContent = "";
        }


        // Check if the username already exists
        if (storedUsers.some(user => user.username === signupUsername)) {
            document.getElementById("signup-username-error").style.color = "red";
            document.getElementById("signup-username-error").textContent = "Email already registered.";
            return;
        } else {
            document.getElementById("signup-username-error").textContent = "";
        }

        // Add the new user to the stored users
        storedUsers.push({ username: signupUsername, password: signupPassword, phone: signupPhone });

        // Store the updated user data in localStorage
        localStorage.setItem("users", JSON.stringify(storedUsers));
        document.getElementById("signup-successful-error").style.color = "green";
        document.getElementById("signup-successful-error").textContent = "Account created successfull.";
        window.location.href = "login.html";
        signupForm.reset();
    });

    // Custom email validation
    document.getElementById("signup-username").addEventListener("input", function () {
        const emailInput = document.getElementById("signup-username").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput)) {
            document.getElementById("signup-username-error").style.color = "red";
            document.getElementById("signup-username-error").textContent = "This email is still not complete.";
        } else {
            document.getElementById("signup-username-error").style.color = "green";
            document.getElementById("signup-username-error").textContent = "Good✔";
        }
    });

