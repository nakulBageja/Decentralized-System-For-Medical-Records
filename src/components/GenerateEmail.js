var nodemailer = require('nodemailer');
require('dotenv').config();
const GenerateEmail = async () =>{
console.log("11") 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'nbageja@gmail.com' ,
    pass: 'nakularyan10'
  }
});

console.log(transporter.sendMail())
var mailOptions = {
  from: 'nbageja@gmail.com',
  to: 'nakul.179301123@muj.manipal.edu',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
await transporter.sendMail(mailOptions, function(error, info){
    console.log("111111111")
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
export default GenerateEmail