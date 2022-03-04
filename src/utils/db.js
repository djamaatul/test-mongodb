const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/mongodb');

module.exports = db;
