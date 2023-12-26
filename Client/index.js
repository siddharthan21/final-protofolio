import express, { json } from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(json())
app.listen(8559,()=>{
    console.log("connected")
})

app.post("/send", async (req,res)=>{
    var name = req.body.name
    var email = req.body.email
    var des = req.body.des

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'monkey.d.luffy6867@gmail.com',
          pass: 'qhdp pwlo nwih hwxa'
        }
      });

      try {
         var  mailOptions = await {
          from: '',
          to: 'monkey.d.luffy6867@gmail.com',
          subject: 'Need  collab',
          text: ` ${email}  ${name }  ${des} `
        };
        
        await transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            if(info){
              res.send(200)
            }
            console.log('Email sent: ' + info.response);
            // if(info.accepted){
            // }
          }
        });
      } catch (error) {
        console.log("err")
      }

})