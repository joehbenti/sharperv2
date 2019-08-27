const express = require('express');
const router = express.Router();

const Contact = require('../../modals/contactSchema');

router.post('/', (req, res) => {
	const newContact = new Contact({
		name: req.body.name,
		email: req.body.email,
		option: req.body.option
	});

	newContact.save().then(contact => res.json(contact));
});

module.exports = router;
