var express = require('express');
var router = express.Router();

const sequenceGenerator = require('./sequenceGenerator');
const Recipient = require('../models/recipient');


router.get('/', (req, res, next) => {
    Recipient.find()
        .then(recipients => {
            res.status(200).json(recipients);
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occured',
                error: error
            });
        });
});


router.post('/', (req, res, next) => {
    const maxRecipientId =  Math.floor(Math.random() * 5000);

    const recipient = new Recipient({
        id: maxRecipientId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        lang: req.body.lang,
        inbox: req.body.inbox
    });


    recipient.save()
        .then(createdRecipient => {
            res.status(201).json({
                message: 'Recipient added successfully',
                recipient: createdRecipient
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
});


router.put('/:id', (req, res, next) => {
    Contact.findOne({ id: req.params.id })
        .then(contact => {
            contact.name = req.body.name;
            contact.description = req.body.description;
            contact.url = req.body.url;

            contact.name = req.body.name,
            contact.email = req.body.email,
            contact.phone = req.body.phone,
            contact.imageUrl = req.body.imageUrl,
            contact.group = null

            Contact.updateOne({ id: req.params.id }, contact)
                .then(result => {
                    res.status(204).json({
                        message: 'Contact updated successfully'
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred',
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Contact not found.',
                error: { contact: 'Contact not found' }
            });
        });
});


router.delete("/:id", (req, res, next) => {
    Contact.findOne({ id: req.params.id })
        .then(contact => {
            Contact.deleteOne({ id: req.params.id })
                .then(result => {
                    res.status(204).json({
                        message: "Contact deleted successfully"
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred',
                        error: error
                    });
                })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Contact not found.',
                error: { contact: 'Contact not found' }
            });
        });
});

module.exports = router; 