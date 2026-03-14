const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {

  console.log("Form request received:", req.body);

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bridgeonedotcom@gmail.com",
      pass: "qtys zupg kjwe qeea"
    }
  });

  const mailOptions = {
    from: "bridgeonedotcom@gmail.com",
    to: "bridgeonedotcom@gmail.com",
    subject: "New Consultation Request",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

Date: ${new Date().toLocaleString()}
`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.send("Email Sent");
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).send(error);
  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});