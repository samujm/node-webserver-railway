require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/** midleware */
//Servir contenido estático
app.use( express.static('public') ); //Path del /

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Samu',
        titulo: 'Cursito de Node :) '
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Samu',
        titulo: 'Cursito de Node :) '
    });
});


app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Samu',
        titulo: 'Cursito de Node :) '
    });
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
});



app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})