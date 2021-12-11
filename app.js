let express = require('express');
let app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', './views');

/* Middleware */
app.use(express.static('public'));

// Enrutadores
let rutasMain = require('./routes/main');
let rutasAbout = require('./routes/about');

// Rutas
app.use('/', rutasMain);
app.use('/about', rutasAbout);

// Server
app.listen(3000, () => {
    console.log('Servidor funcionando: http://localhost:3000');
});