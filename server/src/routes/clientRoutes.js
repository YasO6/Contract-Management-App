const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.get('/', clientController.getAllClients);
router.get('/clients', getClients);
router.post('/', clientController.addClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);
router.get('/client', clientController.getClientsByName); 



module.exports = router;