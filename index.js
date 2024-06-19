const express = require('express')
const partieRoute = require('./Routers/partie.route')
const messageRoute = require('./Routers/message.route')

const app = express();
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', partieRoute)
app.use('/', messageRoute)


app.listen(3031, () => {
    console.log('Serveur en écoute sur le port 3031')
})