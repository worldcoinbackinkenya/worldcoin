document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Check if the user already has a referral code
    let referralCode = localStorage.getItem(loggedInUser + '_referralCode');

    if (!referralCode) {
        // If no referral code exists, generate a new one
        referralCode = generateRandomCode();
        localStorage.setItem(loggedInUser + '_referralCode', referralCode); // Store the code in local storage
    }

    // Display the referral link when the page is loaded
    const referralLink = generateReferralLink(loggedInUser, referralCode);
    document.getElementById('referralLink').textContent = referralLink;

    // Add a click event listener to the copy button
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function() {
        copyToClipboard(referralLink);
    });
});

// Function to generate a referral link
function generateReferralLink(username, referralCode) {
    const baseLink = 'https://worldcoinbackinkenya.github.io/worldcoin/signup?ref=';
    const referralLink = baseLink + referralCode;
    return referralLink;
}

// Function to generate a random alphanumeric code
function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = 6;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    return code;
}

// Function to copy text to the clipboard
function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    linkfloatingCard();
}
