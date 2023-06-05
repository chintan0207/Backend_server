
const nodemailer = require("nodemailer");


const sendEmail = async(req,res)=>{

   // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

    let testAccount = await nodemailer.createTestAccount();

    
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com.",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
          // generated ethereal user
          // generated ethereal password
        user: 'imchintan0207@gmail.com',
        pass: 'vidomwssblyqbyrv',
    },
  });

  let info = await transporter.sendMail({
    from: 'imchintan0207@gmail.com', // sender address
    to: "imchintu0207@gmail.com", // list of receivers
    subject: "Thanks for contact us ✔", // Subject line
    text: "Thank you for booking cab", // plain text body
    html: "<h1 style=color:crimson>Welcome to smart cab point</h1><br><img src=https://m.media-amazon.com/images/I/41WCgGbvwhL._SX300_SY300_QL70_FMwebp_.jpg>", // html body
  });

  console.log("Message sent: %s", info.messageId);

    res.send('sending email')
}

module.exports = sendEmail;