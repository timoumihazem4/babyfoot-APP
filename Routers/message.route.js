const route = require('express').Router()
const messageModel = require('../Models/message.model')




route.post('/addmessage', (req, res, next) => {
    messageModel.postNewMessage(req.body.writer, req.body.contenu)
        .then((doc) => res.status(200).json(doc)).catch((err) => res.status(400).json({ error: err }))
})



module.exports = route