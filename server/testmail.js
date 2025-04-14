const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: process.env.EMAIL,
    user: process.env.GMAIL_USER,  
    // pass: process.env.EMAIL_PASSWORD,
    pass: process.env.MAIL_PASS,
  },
});

const mailOptions = {
//   from: process.env.EMAIL,
  from: process.env.GMAIL_USER,

  to: 'recipient@example.com', // Replace with your email or test email
  subject: 'This is an approval email!',
  text: 'Hello! This is an approval email sent from my project.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('❌ Error:', error);
  }
  console.log('✅ Email sent:', info.response);
});

