const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // validate request
    if (!req.body.email) {
        console.log(req.body.email)
        return res.status(400).send({
            message: "Note cannot be empty"
        })
    }
    // Creat a Note
    const note = new Note({
        name: req.body.name || "Untitled Note",
        email: req.body.email
    });
    // Save the note in the database
    note.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        })
    })
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find().then(notes => {
        res.send(notes);
    }).catch(err => {
        message: err.message || "Some error occurred"
    })

};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id" + req.params.noteId
            })
        })
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    if (!req.body.email) {
        return res.status(400).send({
            message: "Note content can not be empty"
        })
    }

    // find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        name: req.body.name || "Untitled Note",
        email: req.body.email
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.noteId
                });
            }
            res.send(note)
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id" + req.params.noteId
            });
        });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndDelete(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.noteId
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id" + req.params.noteId
                })
            }
            return res.status(500).send({
                message: "Could not delete note with id" + req.params.noteId
            });
        });

};
