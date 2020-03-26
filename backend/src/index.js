const cors = require('cors');
const express = require('express');
const routes =  require('./rotas.js');

const app = express();

app.use(cors({
    //origin:""
}));
app.use(express.json());
app.use(routes);
app.use(cors());



app.listen(3333);

