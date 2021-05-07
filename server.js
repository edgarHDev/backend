const express = require('express');
var cors = require('cors')
const app = express();
const config = require('./config/default.json');
app.use(cors(config.server))


const connectDB = require('./config/db');
//connect to DB
connectDB();


// Init
app.use(express.json({ extended : false}));

app.use('/api/users', require('./routes/api/user'));
const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))