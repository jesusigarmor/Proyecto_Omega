const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req,res) => res.send('API corriendo'))

const PORT = 9000;

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))
