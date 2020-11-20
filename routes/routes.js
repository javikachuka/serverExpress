const express = require('express') // incluir express al proyecto. Asi se puede hacer con cualquier otro paquete
const router = express.Router() //
const bodyParser = require('body-parser') 
const conexion = require('../database/conexion')
const Usuario = require('../models').User
const Car = require('../models').Car

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.end('Estas en el home')
})


router.get('/usuarios', (req, res) => {
    Usuario.findAll({
        include: ['cars','catacteristicas']
    })
        .then((users) => {
            res.json(users)
        })
        .catch((error) => {
            console.log('Hubo un error al obtener users' , error)
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
    Usuario.update({
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

router.get('/autos', (req, res) => {
    Car.findAll()
        .then((autos) => {
            res.json(autos)
        })
        .catch((error) => {
            console.log('Hubo un error al obtener autos' , error)
        })
})

router.post('/autos/create', (req, res) => {
    console.log('datos' , req.body)
    Car.create({
        nombre: req.body.nombre,
        modelo: req.body.modelo,
        anio: req.body.anio,
        userId: req.body.userId
    }).then((auto) => {
        console.log(auto)
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