
const Joi = require('joi')
const mysql = require('mysql2')


const schemaMessage = Joi.object({
    writer: Joi.string().alphanum().min(2).max(20).required(),
    contenu: Joi.string().alphanum().min(2).max(20).required(),

})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Parties'

})





exports.postNewMessage = (writer, contenu) => {

    return new promise((resolve, reject) => {
        connection.query("insert into Parties(player1,player2) values(?,?)", [writer, contenu], (err, result,) => {
            if (err) { reject(err) }
            if (result) { resolve('inserted') }
        })

    })
}



exports.getAllMessages = () => {
    return new promise((resolve, reject) => {
        connection.query("select * from Messages", (err, result) => {
            if (err) { reject(err) }
            if (result) { resolve(result) }
        })
    })
}

