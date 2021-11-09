const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Importando rutas
const quotesRoutes = require('./routes/quotes');
const { urlencoded } = require('express');
const homeRoutes = require('./routes/home');
const pacientRoutes = require('./routes/pacient');


// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'dbconsultorios'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', homeRoutes);
app.use(quotesRoutes);
app.use(pacientRoutes);


// Stactic files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});