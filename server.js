const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

const db = require('./config/keys').mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Mongo DB Connected'))
    .catch(err => console.log(err));
    
    