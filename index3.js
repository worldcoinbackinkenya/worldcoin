
    // Check if user data exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const resetPasswordForm = document.getElementById("signup-form");
    

   
    resetPasswordForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const resetUsername = document.getElementById("reset-username").value;
        const newPassword = document.getElementById("new-password").value;
        const newPassword2 = document.getElementById("new-password2").value;

        const userIndex = storedUsers.findIndex(u => u.username === resetUsername);
        
        if(resetUsername =='' ||newPassword=='' ||newPassword2==''){
          document.getElementById("reset-blank-error").textContent = "Please fill all the fields";
        }
        else if(newPassword !== newPassword2){
            document.getElementById("new-password2-error").textContent = "Your passwords do not match";
        }
        else if (userIndex !== -1) {
            // Update the user's password
            storedUsers[userIndex].password = newPassword;

            // Store the updated user data in localStorage
            localStorage.setItem("users", JSON.stringify(storedUsers));
            document.getElementById("reset-blank-error").style.color = "green";
            document.getElementById("reset-blank-error").textContent = "Password reset was successful";
            window.location.href = "login.html";
            resetPasswordForm.reset();
        } else {
            document.getElementById("reset-username-error").textContent = "Username not found. Please check the username.";
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

