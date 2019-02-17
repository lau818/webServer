//Declaración de paquetes que vamos a utilizar
/**
 Express libreria que pertimete montar un servidor y hacer peticiones http
hbs herramienta que permite hacer render de varios elementos html
 */
const express = require('express')
const hbs = require('hbs')
const app = express() // se configuta express
app.use(express.static(__dirname + '/public')) //se declara el directorio public como la raiz, es decir aqui buscara paginas html para mostrar
hbs.registerPartials(__dirname + '/views/partials') // se agregar al drrectorio principal los elementos que hbs va hacer render
app.set('view engine', 'hbs') // se declara hbs commo el motor de vistas para nuestra pagina a partir de aquí no mostrara archivos .html , utilizara .hbs
app.get('/', (req, res) => {
        res.render('home', {
            name: 'your name here'
        })
    }) // se declara la ruta que usara el servidor para ostrar contendido

app.listen(3000, () => {
        console.log('Ejecuntando en el puerto 3000')
    })
    //se declara el puerto que va a ser utilizado y se manda un mensaje para comprar que funciona