const contractModel = require('../models/contractModel');


// Get all contracts
const getAllContracts = async (req, res) => {
  try {
    const contracts = await contractModel.getAllContracts();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contracts' });
  }
};

// Get contracts by client
const getContractsByClient = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const contracts = await contractModel.getContractsByClient(clientId);
    if (!contracts.length) {
      return res.status(404).json({ error: 'No contracts found for this client ID' });
    }

    res.status(200).json(contracts);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ error: 'Failed to fetch contracts by client ID' });
  }
};

// Get contracts by client name
const getContractsByClientName = async (req, res) => {
  try {
    const clientName = req.params.name;
    const contracts = await contractModel.getContractsByClientName(clientName);

    if (!contracts.length) {
      return res.status(404).json({ error: 'No contracts found for this client name' });
    }

    res.status(200).json(contracts);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ error: 'Failed to fetch contracts by client name' });
  }
};


// Add a new contract
const addContract = async (req, res) => {
  try {
    const contract = await contractModel.addContract(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add contract' });
  }
};

// Update a contract
const updateContract = async (req, res) => {
  try {
    const contract = await contractModel.updateContract(req.params.id, req.body);
    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contract' });
  }
};

// Delete a contract
const deleteContract = async (req, res) => {
  try {
    await contractModel.deleteContract(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contract' });
  }
};



module.exports = {
  getAllContracts,
  getContractsByClient,
  getContractsByClientName, 
  addContract,
  updateContract,
  deleteContract,
};
