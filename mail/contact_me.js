// Check for empty fields
if (!document.querySelector('input[name="name"]').value ||
    !document.querySelector('input[name="email"]').value ||
    !document.querySelector('input[name="phone"]').value ||
    !document.querySelector('textarea[name="message"]').value ||
    !validateEmail(document.querySelector('input[name="email"]').value)) {
    console.log("No arguments Provided!");
    return false;
}

const name = stripTags(document.querySelector('input[name="name"]').value);
const email_address = stripTags(document.querySelector('input[name="email"]').value);
const phone = stripTags(document.querySelector('input[name="phone"]').value);
const message = stripTags(document.querySelector('textarea[name="message"]').value);

// Create the email and send the message
const to = 'ute11@utexpress.com.ng'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
const email_subject = `Website Contact Form:  ${name}`;
const email_body = `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nEmail: ${email_address}\n\nPhone: ${phone}\n\nMessage:\n${message}`;
const headers = {
    'From': 'noreply@utexpress.com.ng', // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    'Reply-To': email_address
};

// Function to send email (using a hypothetical email sending service)
sendEmail(to, email_subject, email_body, headers);
return true;

// Helper functions
function stripTags(input) {
    return input.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail(to, subject, body, headers) {
    // Implement email sending logic here, e.g., using an API
}

