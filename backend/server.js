const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");
const mongoose =  require ('mongoose');
// const EmailModel = require("./models/EmailModel");

// EmailModel();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/api/sendemail", async (req, res) => {
  const { email } = req.body;

  

  try {

  
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const subject = "Thank You Message From Suriya";
    const message = `
        <h3>Hello Developer</h3>
        <p>Thank for your YouTube Tutorials</p>
        <p>Regards...</p>
    `
    
    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(400).json(error.message);
  }

});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
   app.listen(PORT, () => {
      console.log(`DB connected and Server is running on port ${PORT}...`);
    });

}). catch((error)=>{
   console.log(error)
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}...`);
// });