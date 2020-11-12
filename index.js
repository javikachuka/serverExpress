const express = require('express') // incluir express al proyecto. Asi se puede hacer con cualquier otro paquete
const app = express() // instanciar express
const routes = require('./routes/routes')

//middlewares
app.use((req, res, next) => {
    console.log('Request url:' + req.url)
    next() // sirve para que que servidor no se quede en este middleware y continue leyendo el codigo debajo
})


// rutas
app.use(routes)

app.get('*', (req, res) => {
    res.end('Estas perdido?')
})


// poner al servidor a escuchar en el puerto deseado
app.listen(3001, () => {
    console.log('Servidor iniciado en el puerto 3001')
})