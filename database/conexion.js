var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'angular_proyect'
});

connection.connect( error => {
    if(error) {
        throw error
    }else {
        console.log('Conectado a BD mysql!')
    }
} )

module.exports = connection
