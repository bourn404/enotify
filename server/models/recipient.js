const mongoose = require('mongoose');

const recipientSchema = mongoose.Schema({
   id: { type: Number, required: true },
   name: { type: String, required: true },
   email: { type: String },
   phone: { type: String },
   lang: { type: String },
   inbox: [{id: {type: Number}, content: {type: String}, type: {type: String} }]
});

module.exports = mongoose.model('Recipient', recipientSchema);