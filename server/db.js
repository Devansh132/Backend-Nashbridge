const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(process.env.DB, connectionParams)
            .then(() => {
                console.log("Connected to MongoDB successfully");
            })
            .catch((error) => {
                console.error("Error connecting to MongoDB:", error);
            });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
