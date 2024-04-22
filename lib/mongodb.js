import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error While Connexting to MongoDb ", error.message);
  }
};
