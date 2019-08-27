const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	option: {
		type: String,
		required: false
	}
});

module.exports = Contact = mongoose.model('Contact', ContactSchema);
