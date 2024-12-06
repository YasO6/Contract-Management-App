const express = require('express');
const cors = require('cors');

const clientRoutes = require('./routes/clientRoutes');
const contractRoutes = require('./routes/contractRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/contracts', contractRoutes);

module.exports = app;