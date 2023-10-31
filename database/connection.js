import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log("Connected to Mongodb Succesfully");
  } catch (err) {
    console.log(`Error In Mongodb Connection ${err}`);
    throw err;
  }
};
