/**
 * Function to handle WhatsApp Redirection and Thank You Message
 * Developed for: Gym/Fitness Website
 */
function sendToWhatsApp() {
    // 1. Form Inputs se data fetch karna
    const firstName = document.getElementById('wa_fname').value.trim();
    const lastName = document.getElementById('wa_lname').value.trim();
    const subject = document.getElementById('wa_subject').value.trim();
    const email = document.getElementById('wa_email').value.trim();
    const message = document.getElementById('wa_message').value.trim();

    // 2. Validation: Check karna ki zaroori fields bhari hain ya nahi
    if (firstName === "" || lastName === "" || message === "") {
        alert("Please fill in your name and message so we can help you! 😊");
        return;
    }

    // 3. WhatsApp Configuration
    // Note: '91' is the country code for India
    const myPhoneNumber = "919509612559"; 

    // 4. WhatsApp Message Formatting (Using Emojis for Premium Feel)
    const formattedMessage = "💪 *New Fitness Inquiry* 💪%0A%0A" + 
                             "*Name:* " + firstName + " " + lastName + "%0A" +
                             "*Subject:* " + subject + "%0A" +
                             "*Email:* " + email + "%0A%0A" +
                             "*Message:* %0A" + message + "%0A%0A" +
                             "✨ _Sent from Gym Website_ ✨";

    // 5. WhatsApp API URL generate karna
    const waUrl = "https://api.whatsapp.com/send?phone=" + myPhoneNumber + "&text=" + formattedMessage;

    try {
        // 6. WhatsApp ko naye tab mein open karna
        window.open(waUrl, '_blank');

        // 7. Thank You Modal dikhana
        const thankYouModalElement = document.getElementById('thankYouModal');
        if (thankYouModalElement) {
            const modalInstance = new bootstrap.Modal(thankYouModalElement);
            modalInstance.show();
        } else {
            // Agar modal nahi milta toh simple alert
            alert("Thank you! Your message has been sent to WhatsApp. 😊");
        }

        // 8. Form ko reset (clear) karna
        const formElement = document.getElementById('gymContactForm');
        if (formElement) {
            formElement.reset();
        }

    } catch (error) {
        console.error("Error redirecting to WhatsApp:", error);
        alert("Something went wrong. Please try again or contact us directly at 9509612559.");
    }
}

// Optional: Enter key se bhi submit ho jaye jab message box par ho
document.getElementById('wa_message')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendToWhatsApp();
    }
});