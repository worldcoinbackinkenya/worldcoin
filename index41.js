
login
// Get the logged-in user from local storage
const loggedInUser = localStorage.getItem('loggedInUser');
const storedNumbers = localStorage.getItem('generatedNumbers');

// Display the username on the welcome page
if (loggedInUser) {
    document.write(loggedInUser);
} else {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
}

 if (storedNumbers) {
            displayNumbers(JSON.parse(storedNumbers));
        }
// Load and display the stored value when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const storedValue = localStorage.getItem(loggedInUser + '_storedValue');
    const storedValueInput = document.getElementById('storedValue');
    const storedValue2 = localStorage.getItem(loggedInUser + '_storedValue2');
    const storedValueInput2 = document.getElementById('storedValue2');
    const grantdValue = document.getElementById('grant');
    const grantdValue0 = document.getElementById('grant4');
    const storedValue0 = localStorage.getItem(loggedInUser + '_storedValue0');
    const storedValueInput0 = document.getElementById('grant4');
    const grantdValue01 = document.getElementById('grant1');
    const storedValue01 = localStorage.getItem(loggedInUser + '_storedValue01');
    const storedValueInput01 = document.getElementById('grant1');
    const grantdValue02 = document.getElementById('btnclaiming');
    const storedValue02 = localStorage.getItem(loggedInUser + '_storedValue02');
    const storedValueInput02 = document.getElementById('btnclaiming');
    
    
    
    
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
        grantdValue.value = 'Not Claimed';
    }

    if (storedValue0) {
        storedValueInput0.value = storedValue0;
    }
    else{
        storedValueInput0.value = 'Not Verified';
    }

    if(storedValue0){
        document.getElementById("grant4").style.color = "green";
        grantdValue0.value = storedValue0;
        
        }else{
        document.getElementById("grant4").style.color = "red";
        grantdValue0.value = 'Not Verified';
    }

    if(storedValue01){
        document.getElementById("grant1").style.color = "green";
        grantdValue01.value = storedValue01;
                
        }else{
        
        grantdValue01.value = '';
    }

    if(storedValue02){
        document.getElementById("btnclaiming").style.color = "grey";
        grantdValue02.value = storedValue02;
        
        
        }else{
        
        grantdValue02.value = 'Claim Grant';
    }
});

function storeValu01() {

        
    const userStoredValue01 = 'Grant Claimed ✔';
    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue01', userStoredValue01);

    // Display the stored value in the input box
    document.getElementById('storedValue01').value = userStoredValue01;
    
    }

    function storeValu02() {

    const userStoredValue02 = 'Grant Claimed';
    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue02', userStoredValue02);

    // Display the stored value in the input box
    document.getElementById('storedValue02').value = userStoredValue02;
    
    }


function storeValu0() {

    const paymentcode = document.getElementById("paymentcode").value;
         
        if (paymentcode =='') {
            paymentstep5();
        } else{    
    const userStoredValue0 = 'Processing...Might take upto 72hrs';
    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue0', userStoredValue0);

    // Display the stored value in the input box
    document.getElementById('storedValue0').value = userStoredValue0;
    
    }
}
// Function to store the value permanently
function storeValue() {
      const userStoredValue = 28;

    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue', userStoredValue);

    // Display the stored value in the input box
    document.getElementById('storedValue').value = userStoredValue;

}

function storeValue2() {
      const userStoredValue2 = 8764.16;

    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue2', userStoredValue2);

    // Display the stored value in the input box
    document.getElementById('storedValue2').value = userStoredValue2;

}


 // JavaScript function to show the floating card
        function showFloatingCard() {
            var floatingCard = document.getElementById('floatingCard');
            
            floatingCard.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard.style.display = 'none';
            }, 3000);
        }

        function showFloatingCard01() {
            var floatingCard01 = document.getElementById('floatingCard01');
            
            floatingCard01.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard01.style.display = 'none';
            }, 5000);
        }

        function linkfloatingCard() {
            var linkfloatingCard = document.getElementById('linkfloatingCard');
            
            linkfloatingCard.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                linkfloatingCard.style.display = 'none';
            }, 2000);
        }

        function showFloatingCardclaimed() {
            var floatingCard01 = document.getElementById('floatingCardclaimed');
            var grant = document.getElementById('grant').value
            
            if(grant == 'Claimed ✔'){
              floatingCardclaimed.style.display = 'block';  
            }
            else{
                storeValue();
                storeValue2();
                showFloatingCard01();
                storeValu01();
                storeValu02();
            }

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard01.style.display = 'none';
            }, 5000);
        }

        function showFloatingCard04() {
            var floatingCard4 = document.getElementById('floatingCard4');
            
            floatingCard4.style.display = 'none';

        }


        function showFloatingCard2() {
            var floatingCard2 = document.getElementById('floatingCard2');
            
            floatingCard2.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard2.style.display = 'none';
            }, 3000);
        }

        function showFloatingCard3() {
            var floatingCard3 = document.getElementById('floatingCard3');
            
            floatingCard3.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard3.style.display = 'none';
            }, 3000);
        }

        function showfloatingCardpayment() {
            var floatingCardpayment = document.getElementById('floatingCardpayment');
            
            floatingCardpayment.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCardpayment.style.display = 'none';
            }, 6000);
        }

        function floatingpaymentError() {
            var floatingpaymentError = document.getElementById('floatingpaymentError');
            
            floatingpaymentError.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingpaymentError.style.display = 'none';
            }, 4000);
        }

        function showFloatingCard4() {
            var floatingCard4 = document.getElementById('floatingCard4');
            
            floatingCard4.style.display = 'block';

            //
        }

        function showFloatingCard5() {
            var floatingCard4 = document.getElementById('floatingCard4');
            
            floatingCard4.style.display = 'none';

            //
        }

         function showFloatingCard51() {
            var floatingCard5 = document.getElementById('floatingCard5');
            
            floatingCard5.style.display = 'none';

            //
        }

        function showFloatingCard52() {
            var floatingCard5 = document.getElementById('floatingCard5');
            
            floatingCard5.style.display = 'block';

            //
        }
        function showFloatingCard6() {
            var floatingCard6 = document.getElementById('floatingCard6');
            
            floatingCard6.style.display = 'block';

            //
        }
        function showFloatingCard7() {
            var floatingCard6 = document.getElementById('floatingCard6');
            
            floatingCard6.style.display = 'none';

            //
        }

        function showSection(sectionId) {
            // Hide all sections
            document.getElementById('section1').style.display = 'none';
            document.getElementById('section2').style.display = 'none';
            document.getElementById('section3').style.display = 'none';
            document.getElementById('section4').style.display = 'none';
            document.getElementById('section5').style.display = 'none';

            // Show the selected section
            document.getElementById(sectionId).style.display = 'block';
        }
function signup() {
            window.location.href = 'signup.html';
        }
        function login() {
            window.location.href = 'login.html';
        }
         function logout() {
            window.location.href = 'worldcoin.html';
        }

        function paymentstep2()  {
            
        const paymentPhone = document.getElementById("payment-phone").value;
        
        // Validate phone number
        const pattern = /^(07|01)/;

        // Validate email and password
       
        if (paymentPhone =='') {
            document.getElementById("payment-phone-error").style.color = "red";
            document.getElementById("payment-phone-error").textContent = "Provide a phone number";
            step2.style.display = 'none';

            return;
        } else {
            document.getElementById("payment-phone-error").textContent = "";
        }
        if(paymentPhone.length <10||paymentPhone.length >10){
            document.getElementById("payment-phone-error").style.color = "red";
            document.getElementById("payment-phone-error").textContent = "Phone must be 10 digits";
            step2.style.display = 'none';
            step3.style.display = 'none'; 
            return;
        }
        else{
             document.getElementById("payment-phone-error").textContent = "";
        }
        if(!pattern.test(paymentPhone)){
            document.getElementById("payment-phone-error").style.color = "red";
          document.getElementById("payment-phone-error").textContent = "Phone must begin with either 07 or 01";
          step2.style.display = 'none'; 
          return; 
        }else{
            document.getElementById("payment-phone-error").style.color = "green";
            document.getElementById("payment-phone-error").textContent = "Good✔. Now go to step 2";
            step2.style.display = 'block';
            scrollToTop();

        }
    }

    function paymentstep4()  {
            
        const paymentcode = document.getElementById("paymentcode").value;
         const inputValue = paymentcode;
          var lastbutton = document.getElementById('lastbutton');

        const lowercaseRegex = /[a-z]/;
         if (lowercaseRegex.test(inputValue)) {
                document.getElementById("payment-code-error").style.color = "red";
                document.getElementById("payment-code-error").textContent = "Code should only be in capital letters and numbers";
                lastbutton.style.display = 'none';
                return;
            } else {
              document.getElementById("payment-code-error").textContent = "";
              lastbutton.style.display = 'block';
            }
       
        if (paymentcode =='') {
            document.getElementById("payment-code-error").style.color = "red";
            document.getElementById("payment-code-error").textContent = "Please enter a code from M-Pesa";
            lastbutton.style.display = 'none';
            
            return;
        } else {
            document.getElementById("payment-code-error").textContent = "";
            lastbutton.style.display = 'block';
        }
        if(paymentcode.length <10||paymentcode.length >10){
            document.getElementById("payment-code-error").style.color = "red";
            document.getElementById("payment-code-error").textContent = "Code lenght should be 10 characters";
            lastbutton.style.display = 'none';
            
            return;
        }
        else{
            lastbutton.style.display = 'block';
             document.getElementById("payment-code-error").style.color = "green";
            document.getElementById("payment-code-error").textContent = "Good✔. Now read the warning message and click verify code";
        }
            }

    function paymentstep5()  {
        var grant4 = document.getElementById('grant4').value;
            
        const paymentcode = document.getElementById("paymentcode").value;
         if(grant4 == 'Processing...Might take upto 72hrs'){
            floatingpaymentError();
         }
        else if (paymentcode =='') {
            document.getElementById("payment-code-error").style.color = "red";
            document.getElementById("payment-code-error").textContent = "Please enter a code from M-Pesa first";
            lastbutton.style.display = 'none';
            
            return;
        } else{
            showfloatingCardpayment();
            }
        }

        document.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    // Create a floating card with an error message
    var floatingCard = document.createElement('div');
    floatingCard.id = 'floatingCard';
    floatingCard.style.position = 'fixed';
    floatingCard.style.top = '50%';
    floatingCard.style.left = '50%';
    floatingCard.style.transform = 'translate(-50%, -50%)';
    floatingCard.style.padding = '15px';
    floatingCard.style.backgroundColor = '#ff0000';
    floatingCard.style.color = '#ffffff';
    floatingCard.style.borderRadius = '5px';
    floatingCard.style.zIndex = '9999';
    floatingCard.innerHTML = 'Right-clicking is disabled!';

    // Append the floating card to the body
    document.body.appendChild(floatingCard);

    // Automatically hide the floating card after 3 seconds
    setTimeout(function () {
        floatingCard.style.display = 'none';
    }, 3000);
});

     function paymentstep3() {
            var step3 = document.getElementById('step3');
            scrollToTop2();
            step3.style.display = 'block';
            document.getElementById("payment-complete-error").style.color = "green";
            document.getElementById("payment-complete-error").textContent = "Good✔. Now go to step 3";

            //
        }
         function scrollToTop() {
            // Get the container or element to be scrolled
            const container = document.getElementById('step2');

            // Get the target element to scroll to
            const targetElement = document.getElementById('step2'); // Replace 'container' with the actual ID of your target element

            // Scroll the target element into view
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function scrollToTop2() {
            // Get the container or element to be scrolled
            const container = document.getElementById('step3');

            // Get the target element to scroll to
            const targetElement = document.getElementById('step3'); // Replace 'container' with the actual ID of your target element

            // Scroll the target element into view
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
            function onLoad(){
               const storeddValue2 = document.getElementById('storedValue2').value;
               const storeddValue = document.getElementById('storedValue').value;
                document.getElementById('mainbalance').value = storeddValue2;
                document.getElementById('coinbalance').value = storeddValue2;
                document.getElementById('coinbalance2').value = storeddValue;
            }
            window.onload = onLoad;


              

