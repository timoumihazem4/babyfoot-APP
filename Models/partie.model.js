
const Joi = require('joi')
const mysql = require('mysql2')


const schemaPartie = Joi.object({
    player1: Joi.string().alphanum().min(2).max(20).required(),
    player2: Joi.string().alphanum().min(2).max(20).required(),
    finished: false,


    // lastname: Joi.string().alphanum().min(2).max(20).required(),
    // email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    // age: Joi.number().required(),
    // tel: Joi.number().required(),
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Parties'

})





exports.postNewPartie = (player1, player2) => {

    return new promise((resolve, reject) => {
        connection.query("insert into Parties(player1,player2) values(?,?)", [player1, player2], (err, result,) => {
            if (err) { reject(err) }
            if (result) { resolve('inserted') }
        })

    })
}



exports.getAllParties = () => {
    return new promise((resolve, reject) => {
        connection.query("select * from Parties", (err, result) => {
            if (err) { reject(err) }
            if (result) { resolve(result) }
        })
    })
}

exports.getOnePartie = (id) => {
    return new promise((resolve, reject) => {
        connection.query("select * from Parties where id=?", [id], (err, result) => {
            if (err) { reject(err) }
            if (result) { resolve(result) }
        })
    })
}


exports.deleteOnePartie = (id) => {
    return new promise((resolve, reject) => {
        connection.query("delete * from Parties where id=?", [id], (err, result, fieds) => {
            if (err) { reject(err) }
            if (result) { resolve('deleted') }
        })
    })
}

exports.SetFinishPartie = (id) => {
    return new promise((resolve, reject) => {
        connection.query("UPDATE Parties SET finished = false WHERE id = ?", [id], (err, result, fieds) => {
            if (err) { reject(err) }
            if (result) { resolve('updated') }
        })
    })
}


exports.NotYetParties = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT COUNT(*) AS count FROM Parties WHERE finished = false", (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                const count = result[0].count;
                resolve(count);
            }
        });
    });
};



// exports.updateOneStudent = (id) => {
//     return new promise((resolve, reject) => {
//         connection.query("update * from students where id=?", [id], (err, result, fieds) => {
//             if (err) { reject(err) }
//             if (result) { resolve('updated') }
//         })
//     })
// }