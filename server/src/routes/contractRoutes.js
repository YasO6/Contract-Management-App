const express = require('express');
const contractController = require('../controllers/contractController');

const router = express.Router();

router.get('/', contractController.getAllContracts);
router.get('/client/id/:clientId', contractController.getContractsByClient);
router.get('/client/name/:name', contractController.getContractsByClientName);
router.post('/', contractController.addContract);
router.put('/:id', contractController.updateContract);
router.delete('/:id', contractController.deleteContract);

module.exports = router;