const pool = require('../config/db');

// Get all contracts
const getAllContracts = async () => {
  const result = await pool.query(
    'SELECT c.*, cl.name AS client_name FROM contracts c JOIN clients cl ON c.client_id = cl.id'
  );
  return result.rows;
};

// Get contracts by client
const getContractsByClient = async (clientId) => {
  console.log('Fetching contracts for client ID:', clientId); // Debug
  const result = await pool.query(
    'SELECT * FROM contracts WHERE client_id = $1',
    [clientId]
  );
  console.log('Query result:', result.rows); // Debug
  return result.rows;
};


// Get contracts by client name
const getContractsByClientName = async (clientName) => {
  console.log('Fetching contracts for client name:', clientName); // Debug
  const result = await pool.query(
    `
    SELECT c.*, cl.name AS client_name 
    FROM contracts c 
    JOIN clients cl ON c.client_id = cl.id 
    WHERE cl.name = $1
    `,
    [clientName]
  );
  console.log('Query result:', result.rows); // Debug
  return result.rows;
};


// Add a new contract
const addContract = async (contract) => {
  const { client_id, insurance_type, start_date, end_date, annual_premium } =
    contract;
  const result = await pool.query(
    'INSERT INTO contracts (client_id, insurance_type, start_date, end_date, annual_premium) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [client_id, insurance_type, start_date, end_date, annual_premium]
  );
  return result.rows[0];
};

// Update a contract
const updateContract = async (id, contract) => {
  const { insurance_type, start_date, end_date, annual_premium } = contract;
  const result = await pool.query(
    'UPDATE contracts SET insurance_type = $1, start_date = $2, end_date = $3, annual_premium = $4 WHERE id = $5 RETURNING *',
    [insurance_type, start_date, end_date, annual_premium, id]
  );
  return result.rows[0];
};

// Delete a contract
const deleteContract = async (id) => {
  await pool.query('DELETE FROM contracts WHERE id = $1', [id]);
};

module.exports = {
  getAllContracts,
  getContractsByClient,
  getContractsByClientName,
  addContract,
  updateContract,
  deleteContract,
};
