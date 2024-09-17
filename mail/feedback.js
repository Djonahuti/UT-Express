// Check for empty fields
if (!email || !validateEmail(email)) {
    return true;
}

const email_address = email.replace(/<\/?[^>]+(>|$)/g, "").trim(); // Strip tags and trim whitespace

// Create the email and send the message
const to = 'ute11@utexpress.com.ng'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
const email_subject = `Website Contact Form: ${name}`;
const email_body = `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nEmail: ${email_address}\n\nPhone: ${phone}\n\nMessage:\n${message}`;
const headers = {
    'From': 'noreply@utexpress.com.ng', // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    'Reply-To': email_address
};

// Function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to send email (using a library like nodemailer)
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password' // Your email password
    }
});

transporter.sendMail({
    from: headers.From,
    to: to,
    subject: email_subject,
    text: email_body,
    replyTo: headers['Reply-To']
}, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

return true;

