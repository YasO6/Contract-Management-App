const clientModel = require('../models/clientModel');

// Get all clients
const getAllClients = async (req, res) => {
  try {
    const clients = await clientModel.getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};

 // Get clients by name
const getClientsByName = async (req, res) => {
  try {
    const name = req.query.name; // Extract `name` from query string
    if (!name) {
      return res.status(400).json({ error: 'Name query parameter is required' });
    }

    const clients = await clientModel.getClientsByName(name);
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients by name' });
  }
};


// Add a new client
const addClient = async (req, res) => {
  try {
    const client = await clientModel.addClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add client' });
  }
};

const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    // Update client details
    client.name = name;
    client.address = address;
    await client.save();

    res.status(200).json(client);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// Delete a client
const deleteClient = async (req, res) => {
  try {
    await clientModel.deleteClient(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete client' });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await clientModel.getAllClients(); // Replace with actual DB query to fetch all clients
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};

module.exports = { getClients, getAllClients, addClient, updateClient, deleteClient, getClientsByName };