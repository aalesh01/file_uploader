const express = require('express');
const multer = require('multer')
const app = express();


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            console.log(file)
            cb(null, file.originalname)
        }
    })
}).single("avatar")


app.post("/profile",upload, (req, res) => {
    res.send("File Uploaded")
})

app.get("/", (req, res) => {
    res.sendFile('/index.html', { root: __dirname })
})

app.listen('8080');