const mongoose = require("mongoose");

function connectToDB() {
    const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/banking-leger";

    mongoose
        .connect(mongoURI)
        .then(() => {
            console.log("Server is connected with DB");
        })
        .catch((error) => {
            console.log("Error connecting to DB:", error.message);
            process.exit(1);
        });
}

module.exports = connectToDB;