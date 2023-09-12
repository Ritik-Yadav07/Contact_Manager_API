const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require('./config/dbConnection');

connectDB();
app.use(express.json());
app.use('/api/v1/contacts',contactRoutes);
app.use('/api/v1/users',userRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is listening at port ${port}.`);
})