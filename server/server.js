const app = require('./src/app');
const pool = require('./src/config/db');

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connection test successful:', res.rows[0]);
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit the process if the database connection fails
  }
})();