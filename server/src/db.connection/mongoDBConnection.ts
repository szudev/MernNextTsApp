import mongoose, { ConnectOptions } from "mongoose";

export const ConnectToMongoDB = async (): Promise<void> => {
  await mongoose
    .connect(
      process.env.CONNECTION_STRING as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    )
    .catch((err) => {
      console.log(`[DB-ERROR]: Failed to connect, Error: ${err.message}`);
    });
};

export const DisconnectFromMongoDB = async (): Promise<void> => {
  await mongoose.disconnect().catch((err) => {
    console.log(`[DB-ERROR]: Failed to disconnect, Error: ${err.message}`);
  });
};
