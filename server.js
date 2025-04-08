const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const caseRoutes = require("./routes/caseRoutes");


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173', // React dev server
    methods: ['GET', 'POST','PUT','DELETE'],
    credentials: true, // if you're sending cookies/auth headers
  }));

app.use('/api/auth', require('./routes/authRoutes'));
app.use("/api/cases", caseRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

