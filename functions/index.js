const functions = require('firebase-functions');
const express = require('express')
const nodemailer = require("nodemailer");
require('dotenv').config()
// const cors = require('cors')
const app = express()

const bodyParser = require('body-parser')

// app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const mail = app.post('/', async function (req, res) {
    console.log(req.body)
    console.log(process.env.USER);
    console.log(process.env.PASSWORD);
    console.log(process.env.SERVICE);

    let transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    });

    await transporter.sendMail({
        to: process.env.TO,
        subject: `Message from ${req.body.name}`,
        html: `<h3>${req.body.email}</h3>
                <p>${req.body.message}</p>`
    }).catch(err => console.log(err))

    res.json({ hello: "worldzzz" })
})


const mailHandler = functions
    .region('europe-west1')
    .runWith({ memory: '128MB', timeoutSeconds: 20 })
    .https.onRequest(mail)

module.exports = {
    mailHandler,
}