const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const contact = require('./routes/api/contact');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

const db = require('./config/keys').mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true })
	.catch(err => console.log(err));

app.use('/api/contact', contact);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => console.log(`Server Started On Port ${port}`));
