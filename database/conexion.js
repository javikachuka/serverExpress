var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'angular_proyect'
});

connection.connect( error => {
    if(error) {
        console.log('Error al conectar a BD mysql')
        throw error
    }else {
        console.log('Conectado a BD mysql!')
    }
} )

module.exports = connection
