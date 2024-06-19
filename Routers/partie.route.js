const route = require('express').Router()
const partieModel = require('../Models/partie.model')




route.post('/addpartie', (req, res, next) => {
    partieModel.postNewPartie(req.body.player1, req.body.player2)
        .then((doc) => res.status(200).json(doc)).catch((err) => res.status(400).json({ error: err }))
})


route.get('/partie/:id', (req, res, next) => {
    partieModel.getOnePartie(req.params.id)
        .then((doc) => res.status(200).json(doc)).catch((err) => res.status(400).json(err))

})

route.delete('/partie/:id', (req, res, next) => {
    partieModel.deleteOnePartie(req.params.id)
        .then((doc) => res.status(200).json(doc)).catch((err) => res.status(400).json(err))

})


route.patch('/partie/:id', (req, res, next) => {
    partieModel.SetFinishPartie(req.params.id)
        .then((doc) => res.status(200).json(doc)).catch((err) => res.status(400).json(err))

})

router.get('/not-yet-parties', (req, res) => {
    NotYetParties()
        .then((count) => {
            res.json({ count })
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while retrieving the count of not-yet parties.' })
        })
})

module.exports = route