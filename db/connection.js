import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

const DB_URL = process.env.DB_URL || "mongodb://localhost/got";

mongoose.connect(DB_URL);
    .catch((err) => {
        console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;