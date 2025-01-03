const express = require ('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/authRoute');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
