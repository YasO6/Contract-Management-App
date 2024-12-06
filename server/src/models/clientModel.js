const pool = require('../config/db');

// Get all clients
const getAllClients = async () => {
  const result = await pool.query('SELECT * FROM clients');
  return result.rows;
};

// Add a new client
const addClient = async (client) => {
  const { name, address } = client;
  const result = await pool.query(
    'INSERT INTO clients (name, address) VALUES ($1, $2) RETURNING *',
    [name, address]
  );
  return result.rows[0];
};

// Get clients by name
const getClientsByName = async (name) => {
  const result = await pool.query(
    'SELECT * FROM clients WHERE name ILIKE $1', // Case-insensitive search
    [`%${name}%`] // Add wildcards for partial matching
  );
  return result.rows;
};


// Update a client
const updateClient = async (id, client) => {
  const { name, address } = client;
  const result = await pool.query(
    'UPDATE clients SET name = $1, address = $2 WHERE id = $3 RETURNING *',
    [name, address, id]
  );
  return result.rows[0];
};

// Delete a client
const deleteClient = async (id) => {
  await pool.query('DELETE FROM clients WHERE id = $1', [id]);
};

module.exports = { getAllClients, addClient, updateClient, deleteClient, getClientsByName };
