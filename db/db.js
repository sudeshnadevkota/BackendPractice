

const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://USER:user1234@cluster0.wdwddbq.mongodb.net/"
const connectToDatabase = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    } catch (error) {
     console.log(`Database connection error is ${error}`)   
    }
}
module.exports = connectToDatabase;