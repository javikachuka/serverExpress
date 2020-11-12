const express = require('express') // incluir express al proyecto. Asi se puede hacer con cualquier otro paquete
const router = express.Router() //
const bodyParser = require('body-parser') 
const conexion = require('../database/conexion')
const Usuario = require('../models').usuario

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.end('Estas en el home')
})


router.get('/usuarios', (req, res) => {
    Usuario.findAll()
        .then((clientes) => {
            res.json(clientes)
        })
        .catch((error) => {
            console.log('Hubo un error al obtener clientes' , error)
        })
})

router.post('/usuarios/create', (req, res) => {
    console.log('datos' , req.body)
    Usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
    }).then((usuario) => {
        console.log(usuario)
        res.send(200)
    }).catch((error) => {
        console.log(error)
        res.send(500)
    })
})

router.put('/usuarios/update', (req, res) => {
    console.log(req)
    const id = req.params
    console.log(id)
    var user = Usuario.findByPk(id)
    console.log(user)
    user.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
    }).then((usuario) => {
        console.log(usuario)
        res.send(200)
    }).catch((error) => {
        console.log(error)
        res.send(500)
    })

})


router.get('/login', (req, res) => {
    res.end('Hola mundo estas en login')
})

module.exports = router