import mongoose from "mongoose";

const DB_HOST = "127.0.0.1";
const DB_PORT = "27017";
const DB_NAME = "comment";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectDatabase = async () => {
  const connectionString = CONNECTION_STRING;
  await mongoose
    .connect(connectionString)
    .then(() => {
      console.info(`Connected to DB with ${connectionString}`);
    })
    .catch(console.error);
};

export default connectDatabase;
