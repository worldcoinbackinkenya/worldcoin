// Get the logged-in user from local storage
const loggedInUser = localStorage.getItem('loggedInUser');

// Display the username on the welcome page
if (loggedInUser) {
    document.write(loggedInUser);
} else {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
}
// Load and display the stored value when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const storedValue = localStorage.getItem(loggedInUser + '_storedValue');
    const storedValueInput = document.getElementById('storedValue');
    const storedValue2 = localStorage.getItem(loggedInUser + '_storedValue2');
    const storedValueInput2 = document.getElementById('storedValue2');
    const grantdValue = document.getElementById('grant');
    
    if (storedValue2) {
        storedValueInput2.value = storedValue2;
    }
    else{
    	storedValueInput2.value = 0;
    }

    if (storedValue) {
        storedValueInput.value = storedValue;
    }
    else{
    	storedValueInput.value = 0;
    }
    if(storedValue > 0){
    	document.getElementById("grant").style.color = "green";
    	grantdValue.value = 'Claimed ✔';
    	


    }else{
    	document.getElementById("grant").style.color = "red";
    	grantdValue.value = 'Not Claimed X';
    }
});

// Function to store the value permanently
function storeValue() {
	  const userStoredValue = 30;

    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue', userStoredValue);

    // Display the stored value in the input box
    document.getElementById('storedValue').value = userStoredValue;

}

function storeValue2() {
	  const userStoredValue2 = 8000;

    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue2', userStoredValue2);

    // Display the stored value in the input box
    document.getElementById('storedValue2').value = userStoredValue2;

}


 // JavaScript function to show the floating card
        function showFloatingCard() {
            var floatingCard = document.getElementById('floatingCard');
            const btnclaiming = document.getElementById('btnclaiming');

            // Show the floating card

            btnclaiming.innerHTML = 'Grant Claimed';
            btnclaiming.disabled = true;
            btnclaiming.style.backgroundColor = 'grey';
            btnclaiming.style.borderColor = 'grey';
            floatingCard.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard.style.display = 'none';
            }, 5000);
        }

        function showFloatingCard2() {
            var floatingCard2 = document.getElementById('floatingCard2');
            
            floatingCard2.style.display = 'block';

           
        }
        function showFloatingCard3() {
            var floatingCard2 = document.getElementById('floatingCard2');
            
            floatingCard2.style.display = 'none';

           
        }
