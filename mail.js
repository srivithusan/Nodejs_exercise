var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sreevithusan@gmail.com',
    pass: '20152015e'
  }
});

var mailOptions = {
  from: 'sreevithusan@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  html: '<p>That is easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
