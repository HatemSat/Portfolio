const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mailHandler = app.post('/', async function (req, res) {
    const config = functions.config()
    const mailjet = require('node-mailjet')
        .connect(config.env.mailuser, config.env.maillogin)
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": config.env.user,
                        "Name": req.body.name
                    },
                    "To": [
                        {
                            "Email": config.env.user,
                            "Name": "Hatem"
                        }
                    ],
                    "Subject": `New message from ${req.body.name} - ${req.body.email}`,
                    "TextPart": req.body.message,
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
            res.json({ message: "Email Sent" })
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
})


const mail = functions
    .region('europe-west1')
    .runWith({ memory: '128MB', timeoutSeconds: 20 })
    .https.onRequest(mailHandler)

module.exports = {
    mail
}