const User = require('../models/user');
const mongoose=require("mongoose")
async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        return true; // Return true to indicate successful connection
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        return false; // Return false to indicate connection failure
    }
}
async function adduser(name, email, age = 18) {
    try {
        if (!name || !email) {
            throw new Error('Name and email are required fields.');
        }

        const newUser = {
            name: name,
            email: email,
            age: age
        };

        // Save the user to the database using the User model
        const savedUser = await User.create(newUser);

        return savedUser;
    } catch (error) {
        console.error('Error adding user:', error.message);
        throw error;
    }
}
async function getalluser(){
    try {
        // Find all users from the database using the User model
        const allUsers = await User.find({});

        return allUser;
    } catch (error) {
        console.error('Error retrieving users:', error.message);
    }
}

module.exports = {connect,adduser,getalluser};