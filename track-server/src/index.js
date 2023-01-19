require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes')

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = `mongodb+srv://dbuser:${process.env.MONGOPASSWORD}@cluster0.stmbi.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
})

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
})

app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.listen(3000, () => {
    console.log('Listening no port 3000')
})

