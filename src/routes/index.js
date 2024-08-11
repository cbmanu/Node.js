const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/skills", (req, res) => {
  res.render("skills");
});
router.get("/projects", (req, res) => {
  res.render("projects");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.post("/send_email", (req, res) => {
  console.log(req.body);

  let from = req.body.from;
  let to = "carrero.besson@gmail.com";
  let subject = req.body.subject;
  let message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "carrero.besson@gmail.com",
      pass: "goku mjbx qqmm oahu",
    },
  });

  let mailOptions = {
    from,
    to,
    subject,
    text: message + " " + from,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email send: " + info.response);
    }
    res.redirect("/contact");
  });
});

module.exports = router;
