const express = require('express');
const ongController = require('./database/controllers/ongController');
const profileController = require('./database/controllers/profileController');
const sessionController = require('./database/controllers/sessionController');
const incidentController = require('./database/controllers/incidentController');


const routes = express.Router();


routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);


module.exports = routes;
