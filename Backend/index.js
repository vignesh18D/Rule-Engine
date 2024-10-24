const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ruleRoutes = require('./Routes/ruleRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/rules', ruleRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/zeotap', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Sample route for testing
app.get('/', (req, res) => {
    res.send('Zeotap Rule Engine Backend Running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));