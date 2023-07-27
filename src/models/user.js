const mongoose = require('mongoose');

// Define a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, default: 18 },
    createdAt: { type: Date, default: Date.now }
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;