const express = require ('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/authRoute');
const postRoutes = require('./routes/PostRoute');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
