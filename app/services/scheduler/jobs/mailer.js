const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

module.exports = (mailOptions) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.join(__dirname, "email_templates"),
      defaultLayout: false,
    },
    viewPath: path.join(__dirname, "email_templates"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
};
